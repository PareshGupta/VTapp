class Array

  def get_elements
    @temp_object = Hash.new { |hash, key| hash[key] = Array.new }
    for item in self
      @temp_object[item.to_s.length].push(item)
    end
    @temp_object
  end

  def to_hash
    hash_object = Hash.new { |hash, key| hash[key] = Array.new }
    get_elements.inject({}) do |hash, (key, value)|
      if(key.odd?)
        hash_object['odd'].push(value)
      else
        hash_object['even'].push(value)
      end
    end
    hash_object
  end

end
