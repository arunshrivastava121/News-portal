Rails.application.routes.draw do
  root :to => "news#index"
  # delete '/:id(.:format)', :to => 'news#destroy'

  resources :news
end
