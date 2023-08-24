class Menuitem < ApplicationRecord
  belongs_to :restaurant
  has_many :reviews
  has_many :users, through: :reviews

  def avg_ratings
    reviews.average(:ratings).round(2).to_f
  end
end