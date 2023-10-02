class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_image_url, :ratings, :comments, :user_name, :user_bio
  belongs_to :user
  belongs_to :menuitem

  def review_image_url
    if object.review_image.is_a?(ActiveStorage::Attached::One) && object.review_image.attached?
      Rails.application.routes.url_helpers.rails_blob_path(object.review_image, only_path: true)
    else
      object.review_image
    end
  end

  def user_name
    object.user.username
  end

  def user_bio
    object.user.bio
  end
end