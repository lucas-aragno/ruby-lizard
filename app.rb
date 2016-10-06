require "sinatra"
require_relative "config/init"

get "/" do
  send_file File.join(settings.public_folder, 'index.html')
end
