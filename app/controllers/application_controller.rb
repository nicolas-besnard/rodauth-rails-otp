class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  private

  def authenticate
    if !rodauth.logged_in?
      return rodauth.require_authentication
    end

    if rodauth.logged_in? && rodauth.two_factor_authentication_setup? && !rodauth.two_factor_authenticated?
      return rodauth.require_two_factor_authenticated
    end
  end

  def current_account
    @current_account ||= Account.find(rodauth.session_value)
  end

  helper_method :current_account
end
