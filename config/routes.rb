Rails.application.routes.draw do
  resources :movies
  resources :actors, only: :new
  root 'movies#index'
end
