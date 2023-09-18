class RestaurantsController < ApplicationController
    skip_before_action :authorized, only: [:index]

    def index
        restaurants = Restaurant.all
        render json: restaurants, status: :ok
    end 

    def show
        restaurant = Restaurant.find(params[:id])
        render json: restaurant, status: :ok
        print 
    end 
end


