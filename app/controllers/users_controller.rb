class UsersController < ApplicationController
  
  def show
    if current_user
      render json: current_user, status: :ok
    else
      render json: { error: "User not found" }, status: :not_found
    end
  end
    
    def create
        user = User.create!(user_params)
        session[:username] = user.username
        render json: user, status: :created
     end
    
    private

      def user_params
        params.permit(:username, :email, :password, :password_confirmation)
      end
end
