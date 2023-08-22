class User < ApplicationRecord
    has_many :menuitems, through: :reviews
end
