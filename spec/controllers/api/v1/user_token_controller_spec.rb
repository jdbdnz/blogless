require 'rails_helper'

RSpec.describe Api::V1::UserTokenController, type: :controller do
  let(:password) { "just-a-really-great-password" }

  let(:user) do
    FactoryBot.create(:user, password: password)
  end

  let(:valid_attributes) do
    {
      email: user.email,
      password: password
    }
  end

  let(:invalid_attributes) do
    {
      email: user.email,
      password: 'a-very-wrong-password'
    }
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new auth token" do
        skip("assert the jwt is actually valid")
      end

      it "renders a JSON response with the new jwt" do
        post :create, params: {auth: valid_attributes}
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new blog" do
        post :create, params: {auth: invalid_attributes}
        expect(response).to have_http_status(:not_found)
        expect(response.content_type).to eq('text/html')
      end
    end
  end

end
