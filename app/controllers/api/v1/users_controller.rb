module Api
  module V1
    class UsersController < ::ApplicationController
      before_action :authenticate_user, only: [:show, :update]

      # GET /api/v1/user
      def show
        render json: current_user
      end

      # POST /api/v1/user
      def create
        if current_user
          render json: current_user, status: :forbidden and return
        end

        @user = User.new(user_params)

        if @user.save
          render json: @user, status: :created, location: api_v1_user_url
        else
          render json: @user.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /api/v1/user
      def update
        if current_user.update(user_params)
          render json: current_user
        else
          render json: current_user.errors, status: :unprocessable_entity
        end
      end

      private
        def user_params
          params.require(:user).permit(:email, :password)
        end
    end
  end
end
