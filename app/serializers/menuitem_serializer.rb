class MenuitemSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :price, :details
  has_many :reviews
end

 