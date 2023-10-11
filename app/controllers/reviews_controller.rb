class ReviewsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]

def index 
    reviews = current_user.reviews
    render json: reviews, status: :ok
end 

def show
    review = current_user.reviews.find_by(id: params[:id])
    render json: review, status: :ok
end 

def create
  if params['review']['review_image'] == "null"
    params['review']['review_image'] = nil
  end

  review = current_user.reviews.build(review_params)
  puts "Review Params: #{review_params.inspect}" 

  if review.save
    render json: review, status: :created
  else
    puts "Review Errors: #{review.errors.full_messages}" 
    render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
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
  params.require(:review).permit(:ratings, :comments, :menuitem_id, :review_image)
end

end 








