class Addaveratingstomenuitems < ActiveRecord::Migration[7.0]
  def change
    add_column :menuitems, :ave_ratings, :float, default: 0
  end
end
