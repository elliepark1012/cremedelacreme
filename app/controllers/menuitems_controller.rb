class MenuitemsController < ApplicationController
    skip_before_action :authorized

        def index
            menuitems = Menuitem.all
            menuitems_with_ratings = menuitems.map { |menuitem| menuitem.attributes.merge(ave_ratings: menuitem.ave_ratings) }
            render json: menuitems_with_ratings
          end


    def show
        menuitem = Menuitem.find_by(id: params[:id])
        render json: menuitem
    end 
end
