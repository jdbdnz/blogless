require 'rails_helper'

RSpec.describe Api::V1::PostsController, type: :controller do
  let(:user) { FactoryBot.create :user }
  let(:other_user) { FactoryBot.create :fake_user }
  let(:blog) { FactoryBot.create :blog, user: user }
  let(:blog_post) { FactoryBot.create :post, blog: blog }

  let(:authenticated_header) do
    token = Knock::AuthToken.new(payload: { sub: user.id }).token
    { 'Authorization': "Bearer #{token}" }
  end

  let(:other_authenticated_header) do
    token = Knock::AuthToken.new(payload: { sub: other_user.id }).token
    { 'Authorization': "Bearer #{token}" }
  end

  let(:valid_attributes) {
    {
      title: blog_post.title,
      body: blog_post.body,
      blog_id: blog_post.blog_id
    }
  }

  let(:invalid_attributes) {
    {
      title: nil,
      body: blog_post.body
    }
  }

  describe "GET #index" do
    shared_examples_for "successfully gets index" do
      it "returns a success response" do
        get :index, params: { blog_id: blog.to_param }
        expect(response).to be_successful
      end
    end

    describe "authenticated user" do
      before { request.headers.merge! authenticated_header  }
      it_behaves_like "successfully gets index"
    end

    describe "unauthenticated user" do
      it_behaves_like "successfully gets index"
    end
  end

  describe "GET #show" do
    shared_examples_for "successfully gets show" do
      it "returns a success response" do
        get :show, params: { id: blog_post.to_param }
        expect(response).to be_successful
      end
    end

    describe "authenticated user" do
      before { request.headers.merge! authenticated_header  }
      it_behaves_like "successfully gets show"
    end

    describe "unauthenticated user" do
      it_behaves_like "successfully gets show"
    end
  end

  describe "POST #create" do
    context "with valid params" do
      describe "authenticated user" do
        describe "user attempts write action on blog they own" do
          before { request.headers.merge! authenticated_header  }

          it "renders a JSON response with the new post" do
            post :create, params: {post: valid_attributes}
            expect(response).to have_http_status(:created)
            expect(response.content_type).to eq('application/json')
            expect(response.location).to eq(api_v1_post_url(Post.last))
          end

          context "with invalid params" do
            it "renders a JSON response with errors for the new post" do
              post :create, params: {post: invalid_attributes}
              expect(response).to have_http_status(:unprocessable_entity)
              expect(response.content_type).to eq('application/json')
            end
          end
        end

        describe "user attempts write action on blog they don't own" do
          before { request.headers.merge! other_authenticated_header  }

          it "is forbidden" do
            post :create, params: {post: valid_attributes}
            expect(response).to have_http_status(:forbidden)
          end
        end
      end

      describe "unauthenticated user" do
        it "is unauthorized" do
          post :create, params: {post: valid_attributes}
          expect(response).to have_http_status(:unauthorized)
        end
      end
    end
  end

  describe "PUT #update" do
    let(:new_attributes) {
      {
        title: 'amazing new name',
        body: 'really just the tops'
      }
    }

    describe "unauthenticated user" do
      it "is unauthorized" do
        put :update, params: {id: blog_post.to_param, post: new_attributes}
        expect(response).to have_http_status(:unauthorized)
      end
    end

    describe "authenticated user" do
      describe "user attempts write action on blog they don't own" do
        before { request.headers.merge! other_authenticated_header  }

        it "is forbidden" do
          put :update, params: {id: blog_post.to_param, post: new_attributes}
          expect(response).to have_http_status(:forbidden)
        end
      end

      describe "user attempts write action on blog they own" do
        before { request.headers.merge! authenticated_header  }

        context "with valid params" do
          it "updates the requested post" do
            put :update, params: {id: blog_post.to_param, post: new_attributes}
            blog_post.reload
            expect(blog_post.title).to eq(new_attributes[:title])
            expect(blog_post.body).to eq(new_attributes[:body])
          end

          it "renders a JSON response with the post" do
            put :update, params: {id: blog_post.to_param, post: new_attributes}
            expect(response).to have_http_status(:ok)
            expect(response.content_type).to eq('application/json')
          end
        end

        context "with invalid params" do
          it "renders a JSON response with errors for the post" do
            put :update, params: {id: blog_post.to_param, post: invalid_attributes}
            expect(response).to have_http_status(:unprocessable_entity)
            expect(response.content_type).to eq('application/json')
          end
        end
      end
    end
  end

  describe "DELETE #destroy" do
    describe "unauthenticated user" do
      it "is unauthorized" do
        delete :destroy, params: {id: blog_post.to_param}
        expect(response).to have_http_status(:unauthorized)
      end
    end

    describe "authenticated user" do
      describe "user attempts write action on blog they don't own" do
        before { request.headers.merge! other_authenticated_header  }

        it "is forbidden" do
          delete :destroy, params: {id: blog_post.to_param}
          expect(response).to have_http_status(:forbidden)
        end
      end

      describe "user attempts write action on blog they own" do
        before { request.headers.merge! authenticated_header  }

        it "destroys the requested post" do
          params = {id: blog_post.to_param}
          post_count = Post.count
          delete :destroy, params: params
          expect(Post.count - post_count).to be(-1)
          expect(response).to be_successful
        end
      end
    end
  end
end
