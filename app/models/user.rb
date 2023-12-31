class User < ApplicationRecord
  has_many :reviews
  has_many :menuitems, through: :reviews
  has_one_attached :profile_image
  has_secure_password

  validates :username, :email, :password, presence: true
  validates :email, uniqueness: true
  validates :username, uniqueness: true
  validates :bio, length: { in: 10..100 } 
end