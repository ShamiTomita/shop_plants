Rails.application.routes.draw do
  resources :orders
  devise_for :users
  namespace :admin do
      resources :products
      resources :orders
      resources :users
      root to: "products#index"
    end
  resources :products
  root 'pages#index'
end
