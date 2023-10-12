class Menuitem < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews
  attribute :ave_ratings, :float

  def update_average_ratings
    ave_ratings = reviews.average(:ratings).round(2).to_f
    update(ave_ratings: ave_ratings)
  end
end 