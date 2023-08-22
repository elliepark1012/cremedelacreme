class Restaurant < ApplicationRecord
    has_many :menuitems
    has_many :reviews, through: :menuit 
end
