class RodauthController < ApplicationController
  before_action :verify_authenticity_token
  # used by Rodauth for rendering views and CSRF protection
end
