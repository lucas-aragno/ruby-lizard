require "sinatra"
require "sinatra/namespace"
require "json"
require_relative "config/init"
require_relative "models/thing"

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
        @things = Thing.all.map { |thing| {name: thing.name, description: thing.description}}
        @things.to_json
      end

      get "/things/:id" do
        @thing = Thing.with_pk!(params[:id])
        @thing = {name: @thing.name, description: @thing.description}
        @thing.to_json
      end

      post "/things" do
        thing_params = json_params
        @thing = Thing.create(name: thing_params["name"] || "missing name", description: thing_params["description"] || "missing description")
        @thing.to_json
      end
    end

    get "*" do
      send_file File.join(settings.public_folder, 'index.html')
    end

    private
    def json_params
      JSON.parse(request.body.read) rescue {}
    end
  end
end
