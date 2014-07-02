class Array

  def set_elements
    map! do |a| 
      print "Enter array element : "
      a = gets().chomp
    end
  end

  def get_elements(array)
    empty_object = Hash.new(0)
    for item in array
      if empty_object.has_key?(item.length)
        empty_object[item.length] << item
      else
        empty_object[item.length] = Array.new
        empty_object[item.length] << item
      end
    end
    empty_object
  end
end
