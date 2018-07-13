class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :body
      t.timestamp :published_at
      t.references :blog, foreign_key: true, null: false
      t.timestamps
    end
  end
end
