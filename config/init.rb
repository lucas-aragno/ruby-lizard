require "sinatra/sequel"
require "sqlite3"

configure :development do
  set :database, "sqlite:..tmp/development.sqlite"
end

require_relative "migrations"

Sequel::Model.strict_param_setting = false
