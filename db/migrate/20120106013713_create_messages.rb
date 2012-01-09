class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :user
      t.text :content

      t.timestamps
    end
  end
end
