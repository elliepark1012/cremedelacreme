class MenuitemsController < ApplicationController
    def index
        menuitems = Menuitem.all
        render json: menuitems 
    end 

    def show
        menuitem = Menuitem.find_by(id: params[:id])
        render json: menuitem
    end 
end
