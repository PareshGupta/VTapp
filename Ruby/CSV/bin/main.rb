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

  def iterate_to_hash
    @@temp_object.each do |key, array|
      puts key, array, "\n"
    end
  end

  def save_to_new_file
    File.open('new_file.txt', 'w') do |file_object|
      @@temp_object.each do |key, array|
        file_object.puts key, array, "\n"
      end
    end 
  end

end

file = CSVFile.new
puts file.reading_data
puts file.writing_data_to_hash
file.iterate_to_hash

file.save_to_new_file
File.open("new_file.txt", 'r')