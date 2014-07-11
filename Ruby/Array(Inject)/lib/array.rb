class Array

  def group_elements_by_length
    @temp_object = Hash.new { |hash, key| hash[key] = Array.new }
    for item in self
      @temp_object[item.to_s.length].push(item)
    end
    @temp_object
  end

  def group_elements_by_even_and_odd
    hash_object = Hash.new { |hash, key| hash[key] = Array.new }
    group_elements_by_length.inject({}) do |hash, (key, value)|
      if(key.odd?)
        hash_object[:odd].push(value)
      else
        hash_object[:even].push(value)
      end
    end
    hash_object
  end

end
