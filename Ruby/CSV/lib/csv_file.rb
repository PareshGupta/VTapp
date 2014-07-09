require 'csv'

class CSVFile

  def read_and_store_to_hash
    @temp_object = Hash.new { |hash, key| hash[key] = Array.new }
    CSV.foreach('data.csv', :headers => true) do |row|
      @temp_object[row[2]].push("#{ row[0] } (EmpId:#{ row[1] })")
    end
    @temp_object
  end

  def write_data_to_new_file(file_name)
    File.open(file_name, 'w') do |file_object|
      read_and_store_to_hash.each do |key, array|
        file_object.puts key, array, "\n"
      end
    end
  end

end

# class Employee

#   def initialize(name, emp_id, designation)
#     @name = name
#     @emp_id = emp_id
#     @designation = designation
#   end

# end
