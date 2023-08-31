class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_image, :ratings, :comments, :user_name, :user_bio
  belongs_to :user
  belongs_to :menuitem
  
  def user_name
    object.user.username
  end

  def user_bio
    object.user.bio
  end

end



