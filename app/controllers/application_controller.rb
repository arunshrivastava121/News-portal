class ApplicationController < ActionController::Base

  def authorize
    session[:authorized] = true
  end

  def http_basic_authenticated?
    session[:authorized]
  end

  def end_session
    session[:authorized] = nil
  end
end
