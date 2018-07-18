require 'rails_helper'

RSpec.describe Api::V1::BlogsController, type: :controller do
  let(:user) { FactoryBot.create :user }

  let(:authenticated_header) do
    token = Knock::AuthToken.new(payload: { sub: user.id }).token
    { 'Authorization': "Bearer #{token}" }
  end

  let(:valid_attributes) do
    {
      name: 'My Blog',
      description: 'A blog about me and my dog'
    }
  end

  let(:invalid_attributes) do
    {
      name: nil,
      description: 'A blog about me and my dog'
    }
  end

  before { request.headers.merge! authenticated_header  }

  describe "GET #index" do
    it "returns a success response with the a list of blogs in JSON" do
      blog1 = FactoryBot.create :blog, user: user
      blog2 = FactoryBot.create :blog, user: user
      get :index, params: {}

      expected_json = [
        blog1,
        blog2,
      ].to_json

      expect(response).to be_success
      expect(response.body).to eq expected_json
    end
  end

  describe "GET #show" do
    it "returns a success response" do
      blog = FactoryBot.create :blog, user: user
      get :show, params: {id: blog.to_param}
      expect(response).to be_success
      expect(response.body).to eq blog.to_json
    end
  end

  describe "POST #create" do
    context "with valid params" do
      it "creates a new Blog" do
        expect {
          post :create, params: {blog: valid_attributes}
        }.to change(Blog, :count).by(1)
      end

      it "renders a JSON response with the new blog" do

        post :create, params: {blog: valid_attributes}
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
        expect(response.location).to eq(api_v1_blog_url(Blog.last))
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the new blog" do

        post :create, params: {blog: invalid_attributes}
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "PUT #update" do
    context "with valid params" do
      let(:new_attributes) {
        {
          name: "Cool blog 62",
          description: "This blog just got cooler!"
        }
      }

      it "updates the requested blog" do
        blog = FactoryBot.create :blog, user: user
        put :update, params: {id: blog.to_param, blog: new_attributes}
        blog.reload
        expect(blog.name).to eq(new_attributes[:name])
        expect(blog.description).to eq(new_attributes[:description])
      end

      it "renders a JSON response with the blog" do
        blog = FactoryBot.create :blog, user: user
        put :update, params: {id: blog.to_param, blog: valid_attributes}
        expect(response).to have_http_status(:ok)
        expect(response.content_type).to eq('application/json')
      end
    end

    context "with invalid params" do
      it "renders a JSON response with errors for the blog" do
        blog = FactoryBot.create :blog, user: user
        put :update, params: {id: blog.to_param, blog: invalid_attributes}
        expect(response).to have_http_status(:unprocessable_entity)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested blog" do
      blog = FactoryBot.create :blog, user: user
      expect {
        delete :destroy, params: {id: blog.to_param}
      }.to change(Blog, :count).by(-1)
    end
  end

end
