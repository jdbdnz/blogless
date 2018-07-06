FactoryBot.define do
  factory :blog do
    name 'My Blog'
    description 'The best blog ever'

    factory :fake_blog do
      name { Faker::Hipster.word }
      description { Faker::Hipster.sentence }
    end
  end
end
