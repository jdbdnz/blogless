class Post < ApplicationRecord
  belongs_to :blog, required: true
  validates :title, presence: true
end
