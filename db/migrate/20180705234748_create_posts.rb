class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :draft_title, null: false
      t.text :draft_body
      t.string :published_title
      t.text :published_body
      t.datetime :published_at
      t.datetime :last_published_at
      t.references :blog, foreign_key: true, null: false
      t.timestamps
    end
  end
end
