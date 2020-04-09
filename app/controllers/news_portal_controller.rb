class NewsPortalController < ApplicationController
  http_basic_authenticate_with name: ENV["ADMIN"], password: ENV["PASSWORD"], except: :index

  def index
  end

  def news_section
  end
end
#ignore this controller.