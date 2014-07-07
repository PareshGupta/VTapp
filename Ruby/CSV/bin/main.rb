require 'csv'

class CSVFile

  def reading_data
    CSV.foreach("data.csv") do |row| 
      puts "#{row}" 
    end
  end

  def writing_data_to_hash
    @@temp_object = Hash.new { |hash, key| hash[key] = Array.new }
    CSV.foreach('data.csv', :headers => true) do |row|
      @@temp_object[row[2]].push("#{row[0]} (EmpId:#{row[1]})")
    end
    @@temp_object
  end

  def iterate_to_hash_and_save
    @@temp_object.each do |key, array|
      puts key
      puts array
      print "\n"
    end
  end

end

file = CSVFile.new
puts file.reading_data
puts file.writing_data_to_hash
a = file.iterate_to_hash_and_save  # unexpected input to a new file
File.open("new_file.txt", 'w') do |file_object|
  file_object.puts a
end

# File.open("new_file.txt", 'r')