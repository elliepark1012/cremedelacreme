class Review < ApplicationRecord
  belongs_to :user
  belongs_to :menuitem

  validates :ratings, presence: true
  validates :comments, presence: true
end
