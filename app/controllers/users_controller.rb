  class UsersController < ApplicationController
    skip_before_action :authorized, only: [:create]

    def index 
      users = User.all.with_attached_image
      render json: users
    end
    
    def show
      if current_user
        render json: current_user, status: :ok
      else
        render json: { error: "User not found" }, status: :not_found
      end
    end
      
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      render json: user, status: :created
    end
      
      private
      
      def user_params
        params.permit(:username, :bio, :profile_image, :email, :password, :password_confirmation)
      end
  end
