require_relative '../lib/csv_file.rb'

puts 'Enter file name to be created'
file_name = gets.chomp
file = CSVFile.new
file.write_data_to_new_file(file_name)
