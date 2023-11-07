class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :ratings, :comments, :user_name, :user_bio, :menuitem_name
  belongs_to :user
  belongs_to :menuitem

  def menuitem_name
    object.menuitem.name
  end

  def user_name
    object.user.username
  end

  def user_bio
    object.user.bio
  end
end