require "sinatra/sequel"
require "sqlite3"

configure :development do
  set :database, "sqlite:./tmp/development.sqlite"
end

configure :production do
  set :database, ENV["DATABASE_URL"]
end

require_relative "migrations"

Sequel::Model.strict_param_setting = false
