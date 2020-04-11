Rails.application.routes.draw do
  root :to => "news#index"
  # delete '/:id(.:format)', :to => 'news#destroy'
  get "news_section", to: "news_portal#news_section"
  resources :news
end
