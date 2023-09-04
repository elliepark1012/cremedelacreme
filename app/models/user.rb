class User < ApplicationRecord
    has_many :reviews
    has_many :menuitems, through: :reviews

    has_secure_password 
end
