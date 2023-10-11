class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def index 
    users = User.all.with_attached_profile_image  
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
    if params['user']['profile_image'] == "null"
       params['user']['profile_image'] = nil
    end 

    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end
    
  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :bio, :profile_image)
  end
  
end
