module Api
  module V1
    class PostsController < ApplicationController
      # before_action :set_blog, only: [:index]
      before_action :set_post, only: [:show, :update, :destroy]
      # before_action :authenticate_user, except: [:index, :show]

      # GET /api/v1/posts
      def index
        @posts = Post.all #@blog.posts
        render json: @posts
      end

      # GET /api/v1/posts/1
      def show
        render json: @post
      end

      # POST /api/v1/posts
      def create
        @post = Post.new(post_params)

        if @post.save
          render json: @post, status: :created, location: @post
        else
          render json: @post.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /api/v1/posts/1
      def update
        if @post.update(post_params)
          render json: @post
        else
          render json: @post.errors, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/posts/1
      def destroy
        @post.destroy
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_post
          @post = Post.find(params[:id])
        end

        def set_blog
          @blog = Blog.find(params[:blog_id])
        end

        # Only allow a trusted parameter "white list" through.
        def post_params
          params.require(:post).permit(:title, :body, :draft, :blog_id)
        end
    end
  end
end
