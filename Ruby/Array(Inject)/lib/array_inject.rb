class Array

  def get_elements(array)
    @empty_object = Hash.new { |hash, key| hash[key] = Array.new }
    for item in array
      @empty_object[item.length].push(item)
    end
    @empty_object
  end

  def inject  # include predefined inject method of enumerable
    temp_object = Hash.new { |hash, key| hash[key] = Array.new }
    @empty_object.each_key do |key|
      if (key.odd?)
        temp_object["odd"].push(@empty_object[key])
      else
        temp_object["even"].push(@empty_object[key])
      end
    end
    temp_object
  end
end

array = Array.new(9)
array.map! do |a| 
  print "Enter array element : "
  a = gets().chomp
end

puts array.get_elements(array)
puts array.inject