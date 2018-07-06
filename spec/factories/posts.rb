FactoryBot.define do
  factory :post do
    title 'My first post'
    body 'This is the best post ever made in the history of this blog'

    factory :fake_post do
      title { Faker::Hipster.sentence }
      body { Faker::Hipster.paragraph(3) }
    end
  end
end
