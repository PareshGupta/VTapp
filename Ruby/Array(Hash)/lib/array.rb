class Array

  def group_by_length
    temp_object = Hash.new { |h, k| h[k] = Array.new }
    for item in self
      temp_object[item.length].push(item)
    end
    temp_object
  end

end