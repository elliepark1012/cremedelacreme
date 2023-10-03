class Review < ApplicationRecord
  belongs_to :user
  belongs_to :menuitem

  has_one_attached :review_image

  validates :ratings, presence: true
  validates :comments, presence: true
  validates :ratings, inclusion: { in: 1..5, message: "should be between 1 and 5" }

end