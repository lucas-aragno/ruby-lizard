require "sinatra"
require "sinatra/namespace"
require "json"
require_relative "config/init"

module RubyLizard
  class App < Sinatra::Base
    register Sinatra::Namespace

    namespace "/api" do
      before do
        content_type 'application/json'
      end

      get "/things" do
        {}.to_json
      end
    end

    get "*" do
      send_file File.join(settings.public_folder, 'index.html')
    end
  end
end
