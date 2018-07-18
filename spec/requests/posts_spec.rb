require 'rails_helper'

RSpec.describe "Posts", type: :request do
  let(:user) { FactoryBot.create :user }
  let(:authenticated_header) do
    token = Knock::AuthToken.new(payload: { sub: user.id }).token
    { 'Authorization': "Bearer #{token}" }
  end

  describe "GET /posts" do
    it "works! (now write some real specs)" do
      get api_v1_posts_path, headers: authenticated_header
      expect(response).to have_http_status(200)
    end
  end
end
