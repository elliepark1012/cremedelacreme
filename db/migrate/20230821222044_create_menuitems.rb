class CreateMenuitems < ActiveRecord::Migration[7.0]
  def change
    create_table :menuitems do |t|
      t.string :name
      t.string :img_url
      t.integer :price
      t.string :details
      t.belongs_to :restaurant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
