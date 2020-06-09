Rails.application.routes.draw do
  resources :posts, only: %i[index]
  root to: 'static_pages#homepage'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
