# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

2.times do
  user = FactoryBot.create :fake_user
  blog = FactoryBot.create :fake_blog, user: user
  FactoryBot.create :fake_post, blog: blog
  FactoryBot.create :fake_post_published, blog: blog
end
