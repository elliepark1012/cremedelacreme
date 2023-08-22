class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :bio
      t.string :profile_image
      t.string :password
      t.string :password_confirmation

      t.timestamps
    end
  end
end
