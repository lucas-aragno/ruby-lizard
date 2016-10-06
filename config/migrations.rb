migration "create a thing table" do
  database.create_table :things do
    primary_key :id
    string :name
  end
end

migration "add thing description" do
  database.add_column :things, :description, String
end
