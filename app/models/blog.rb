class Blog < ApplicationRecord
  belongs_to :user, required: true
  has_many :posts

  validates :name, presence: true

  def as_json(options={})
    {
      id: self.id,
      name: self.name,
      description: self.description
    }
  end
end
