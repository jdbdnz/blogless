class Post < ApplicationRecord
  belongs_to :blog, required: true
  has_one :user, through: :blog

  validates :title, presence: true

  def as_json(options={})
    {
      id: self.id,
      title: self.title,
      body: self.body,
      published_at: self.published_at,
      blog_id: self.blog_id
    }
  end
end
