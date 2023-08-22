class Menuitem < ApplicationRecord
  belongs_to :restaurant
  has_many :users, through: :reviews
end
