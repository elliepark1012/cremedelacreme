class Review < ApplicationRecord
  belongs_to :user
  belongs_to :menuitem
  after_create :update_menuitem_average_ratings
  after_update :update_menuitem_average_ratings

  has_one_attached :review_image

  validates :ratings, presence: true
  validates :comments, presence: true
  validates :ratings, inclusion: { in: 1..5, message: "should be between 1 and 5" }

  private

  def update_menuitem_average_ratings
    menuitem.update_average_ratings
  end
end