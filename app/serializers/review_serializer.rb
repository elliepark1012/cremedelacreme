class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_image, :ratings, :comments
  belongs_to :user
  belongs_to :menuitem
end



