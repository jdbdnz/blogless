class Blog < ApplicationRecord
  belongs_to :user, required: true
  has_many :posts

  validates :name, presence: true

  def as_json(options={})
    {
      name: self.name,
      description: self.description
    }
  end
end
