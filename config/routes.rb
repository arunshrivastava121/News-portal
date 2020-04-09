Rails.application.routes.draw do
  root :to => "news#index"
  resources :news, except: [:index]
end
