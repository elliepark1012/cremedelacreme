class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio, :profile_image_url
  has_many :reviews
  has_many :menuitems

  def profile_image_url
    if object.image.attached?
      rails_blob_path(object.image, only_path: true)
    else
      'https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-1024.png'
    end
  end