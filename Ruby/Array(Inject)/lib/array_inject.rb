class Array

  def set_elements
    map! do |a| 
      print "Enter array element : "
      a = gets().chomp
    end
  end

  def get_elements()
    @empty_object = Hash.new(0)
    for item in self
      if @empty_object.has_key?(item.length)
        @empty_object[item.length] << item
      else
        @empty_object[item.length] = Array.new
        @empty_object[item.length] << item
      end
    end
    @empty_object
  end

  def inject
    new_object = Hash.new(0)
    @empty_object.each_key do |key|
      if (key.odd?)
        new_object["odd"] = Array.new
        new_object["odd"] << @empty_object[key]
      else
        new_object["even"] = Array.new
        new_object["even"] << @empty_object[key]
      end
    end
    new_object
  end
end

array = Array.new(9)
array.set_elements
puts array.get_elements()
puts array.inject