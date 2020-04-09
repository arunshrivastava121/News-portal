json.extract! news, :id, :category, :title, :subtitle, :details, :published, :priority, :published_at, :created_at, :updated_at
json.url news_url(news, format: :json)
