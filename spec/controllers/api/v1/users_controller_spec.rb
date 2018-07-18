require 'rails_helper'

RSpec.describe Api::V1::UsersController, type: :controller do

  # This should return the minimal set of attributes required to create a valid
  # User. As you add validations to User, be sure to
  # adjust the attributes here as well.
  let(:valid_attributes) do
    {
      email: 'hi@hi.com',
      password: 'password'
    }
  end

  let(:invalid_attributes) do
    { email: 'hi@hi.com' }
  end

  # This should return the minimal set of values that should be in the session
  # in order to pass any filters (e.g. authentication) defined in
  # UsersController. Be sure to keep this updated too.
  let(:user) { FactoryBot.create :user }
  let(:authenticated_header) do
    token = Knock::AuthToken.new(payload: { sub: user.id }).token
    { 'Authorization': "Bearer #{token}" }
  end

  describe "GET #show" do
    it "returns a success response with user JSON" do
      request.headers.merge! authenticated_header
      get :show, params: {}

      expect(response.body).to eq user.to_json
      expect(response).to be_success
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new User" do
        expect {
          post :create, params: { user: valid_attributes }
        }.to change(User, :count).by(1)
      end

      it "renders a JSON response with the new user" do
        post :create, params: {user: valid_attributes}
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
        expect(response.location).to eq(api_v1_user_url)
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new user" do
        post :create, params: {user: invalid_attributes}
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        {
          email: 'tim@tom.com',
          password: 'a-great-password'
        }
      }

      it "updates the requested user" do
        request.headers.merge! authenticated_header
        put :update, params: {id: user.to_param, user: new_attributes}
        user.reload
        expect(user.email).to eq(new_attributes[:email])
      end

      it "renders a JSON response with the user" do
        request.headers.merge! authenticated_header
        put :update, params: {id: user.to_param, user: valid_attributes}
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the user" do
        request.headers.merge! authenticated_header
        put :update, params: {user: invalid_attributes}
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end
end
