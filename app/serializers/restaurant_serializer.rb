class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :res_link, :borough, :location, :about, :img_url, :hours
  has_many :menuitems 
end
