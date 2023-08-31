class Menuitem < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews

  def ave_ratings
    return 0 unless reviews.count.positive? 
    reviews.average(:ratings).round(2).to_f
  end
end