require 'csv'

class CSVFile

  def reading_data
    CSV.foreach("data.csv") do |row|
      puts "#{ row }"
    end
  end

  def writing_data_to_hash
    @temp_object = Hash.new { |hash, key| hash[key] = Array.new }
    CSV.foreach('data.csv', :headers => true) do |row|
      @temp_object[row[2]].push("#{ row[0] } (EmpId:#{ row[1] })")
    end
    @temp_object
  end

end
