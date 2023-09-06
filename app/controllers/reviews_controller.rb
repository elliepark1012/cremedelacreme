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
    review = current_user.reviews.create(review_params)
    render json: review, status: :created
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
    params.permit(:menuitem_id, :review_image, :ratings, :comments)
end 

end 










#     def destroy
#         signup = current_user.signups.find_by(id: params[:id])
#             if signup
#                 signup.destroy
#                 head :no_content
#             else
#                 render json: { error: "Sign Up not found"}, status: :not_found
#             end
#      end

#      def number
#         #  /signups/3 => {partipants is at least 3 signups}
#         # 1. map signups get the numbers of participants 2. compare it with number 3. return opportunity that related to the ones 
#         signupsArray = current_user.signups.filter {|s| s.participants >= params[:num].to_i}
#         opportunities = signupsArray.map{|s| s.opportunity}
#         if  opportunities.empty?   
#             render json: { error: "No Sign up matched"}
            
#         else 
#             render json: opportunities, status: :ok
#         end
#      end 


#     private

#     def signup_params
#         params.permit(:opportunity_id, :participants, :extras, :donation)
#     end 
# end