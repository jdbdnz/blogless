module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_user

      def current
        render json: current_user.as_json(only: %i(id email))
      end
    end
  end
end