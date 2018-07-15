FactoryBot.define do
  factory :user do
    email "jane.roe@blogless.co"
    password 'verysecurepassword'

    factory :fake_user do
      email { "#{Faker::HeyArnold.character}@blogless.co" }
      password 'impossibletoguess'
    end
  end
end
