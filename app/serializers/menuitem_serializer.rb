class MenuitemSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :price, :details, :ave_ratings
  has_many :reviews

end

 