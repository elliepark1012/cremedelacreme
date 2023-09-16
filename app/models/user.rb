class User < ApplicationRecord
    has_many :reviews
    has_many :menuitems, through: :reviews

    has_secure_password 

    validates :username, :email, :password, presence: true
    validates :email, username, uniqueness: true
end
