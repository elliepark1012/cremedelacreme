Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show' # Place it before other routes
  resources :menuitems
  resources :reviews
  resources :restaurants
  resources :users
  # ...
end
