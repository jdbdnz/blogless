class Post < ApplicationRecord
  belongs_to :blog, required: true
  validates :draft_title, presence: true
end
