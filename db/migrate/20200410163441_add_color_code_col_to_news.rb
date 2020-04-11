class AddColorCodeColToNews < ActiveRecord::Migration[6.0]
  def change
    add_column :news, :color_code, :string
  end
end
