module Api
  module V1
    class PostsController < ::ApplicationController
      before_action :set_blog, only: [:index]
      before_action :set_post, only: [:show, :update, :destroy]
      before_action :authenticate_user, only: [:create, :update, :destroy]

      # GET /api/v1/posts
      def index
        @posts = @blog.posts
        render json: @posts
      end

      # GET /api/v1/posts/1
      def show
        render json: @post
      end

      # POST /api/v1/posts
      def create
        @post = Post.new(post_params)

        if @post.invalid?
          render json: @post.errors, status: :unprocessable_entity
        elsif @post.user != current_user
          head :forbidden
        elsif @post.save
          render json: @post, status: :created, location: api_v1_post_url(@post)
        else
          render json: @post.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /api/v1/posts/1
      def update
        head :forbidden and return unless @post.user == current_user

        if @post.update(post_params)
          render json: @post
        else
          render json: @post.errors, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/posts/1
      def destroy
        head :forbidden and return unless @post.user == current_user
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
          params.require(:post).permit(:title, :body, :blog_id)
        end
    end
  end
end
