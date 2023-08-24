class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio, :profile_image
  has_many :reviews
end
