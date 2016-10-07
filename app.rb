require "sinatra"
require "sinatra/namespace"
require "json"
require_relative "config/init"

DB = database
THINGS = DB.from(:things)

module RubyLizard
  class App < Sinatra::Base
    register Sinatra::Namespace

    namespace "/api" do
      before do
        content_type 'application/json'
      end

      get "/things" do
        @things = THINGS.all
        @things.to_json
      end

      get "/things/:id" do
        @thing = THINGS[id: params[:id]] || {}
        @thing.to_json
      end

      post "/things" do
        @thing = THINGS.insert(name: params[:name], description: params[:description])
        @thing.to_json
      end
    end

    get "*" do
      send_file File.join(settings.public_folder, 'index.html')
    end
  end
end
