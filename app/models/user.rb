class User < ApplicationRecord
  has_secure_password

  has_many :blogs

  validates :email, :password, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 8 }

  def as_json(options={})
    {
      id: self.id,
      email: self.email
    }
  end
end
