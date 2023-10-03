class ReviewsController < ApplicationController
    skip_before_action :authorized

def index 
    reviews = current_user.reviews
    render json: reviews, status: :ok
end 

def show
    review = current_user.reviews.find_by(id: params[:id])
    render json: review, status: :ok
end 

def create
  review = Review.new(review_params)

  if review.valid? 
    if review.save
      render json: review, status: :created
    else
      render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
    end
  else
    render json: { errors: ['Invalid rating. Please enter a number between 1 and 5.'] }, status: :unprocessable_entity
  end
end


def update 
    review = current_user.reviews.find(params[:id])
    review.update!(review_params)
    render json: review, status: :accepted
end 

def destroy
    review = current_user.reviews.find_by(id: params[:id])
    if review.destroy
       head :no_content 
    else 
       render json: { error: "Review not found"}, status: :not_found
    end
end 

private
    
def review_params
  params.permit(:ratings, :comments, :menuitem_id, :review_image)
end

end 










