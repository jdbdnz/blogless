class Blog < ApplicationRecord
  belongs_to :user, required: true
  has_many :posts

  validates :name, presence: true
end
