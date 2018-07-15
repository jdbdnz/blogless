class Post < ApplicationRecord
  belongs_to :blog, required: true
  has_one :user, through: :blog

  validates :title, presence: true
end
