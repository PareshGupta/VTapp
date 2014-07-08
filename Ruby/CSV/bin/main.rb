require_relative '../lib/csv_file.rb'

file = CSVFile.new
puts file.reading_data

File.open('new_file.txt', 'w') do |file_object|
  file.writing_data_to_hash.each do |key, array|
    file_object.puts key, array, "\n"
  end
end

File.open("new_file.txt", 'r')
