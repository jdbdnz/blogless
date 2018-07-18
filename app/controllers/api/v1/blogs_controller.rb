module Api
  module V1
    class BlogsController < ::ApplicationController
      before_action :authenticate_user
      before_action :set_blog, only: [:show, :update, :destroy]

      # GET /api/v1/blogs
      def index
        @blogs = current_user.blogs

        render json: @blogs
      end

      # GET /api/v1/blogs/1
      def show
        render json: @blog
      end

      # POST /api/v1/blogs
      def create
        @blog = Blog.new(blog_params)

        if @blog.save
          render json: @blog, status: :created, location: api_v1_blog_url(@blog)
        else
          render json: @blog.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /api/v1/blogs/1
      def update
        if @blog.update(blog_params)
          render json: @blog
        else
          render json: @blog.errors, status: :unprocessable_entity
        end
      end

      # DELETE /api/v1/blogs/1
      def destroy
        @blog.destroy
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_blog
          @blog = current_user.blogs.find(params[:id])
        end

        # Only allow a trusted parameter "white list" through.
        def blog_params
          params.require(:blog).permit(:name, :description).merge({ user_id: current_user.id })
        end
    end
  end
end
