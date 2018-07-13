FactoryBot.define do
  factory :post do
    title 'My first post'
    body 'This is the best post ever made in the history of this blog'

    factory :post_published do
      published_at { 2.day.ago }
    end

    factory :fake_post do
      title { Faker::Hipster.sentence }
      body { Faker::Hipster.paragraph(3) }

      factory :fake_post_published do
        published_at { 2.day.ago }
      end
    end
  end
end
