FactoryBot.define do
  factory :post do
    draft_title 'My first post'
    draft_body 'This is the best post ever made in the history of this blog'

    factory :post_published do
      published_title 'My first post amended'
      published_body 'This is the _second_ best post ever made in the history of this blog'
      published_at { 2.day.ago }
      last_published_at { 1.day.ago }
    end

    factory :fake_post do
      draft_title { Faker::Hipster.sentence }
      draft_body { Faker::Hipster.paragraph(3) }

      factory :fake_post_published do
        published_title { Faker::Hipster.sentence }
        published_body { Faker::Hipster.paragraph(3) }
        published_at { 2.day.ago }
        last_published_at { 1.day.ago }
      end
    end
  end
end
