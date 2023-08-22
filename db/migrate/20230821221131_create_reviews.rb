class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :review_image
      t.integer :ratings
      t.string :comments
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :menuitem, null: false, foreign_key: true

      t.timestamps
    end
  end
end
