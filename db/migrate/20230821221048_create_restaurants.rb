class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :res_link
      t.string :borough
      t.string :location
      t.string :about
      t.string :img_url
      t.string :hours

      t.timestamps
    end
  end
end
