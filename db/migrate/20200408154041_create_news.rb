class CreateNews < ActiveRecord::Migration[6.0]
  def change
    create_table :news do |t|
      t.string :category
      t.string :title
      t.string :subtitle
      t.text :details
      t.boolean :published
      t.integer :priority
      t.date :published_at

      t.timestamps
    end
  end
end
