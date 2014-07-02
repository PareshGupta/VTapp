class Array
  def set_elements
    map! do |a| 
      print "Enter array element : "
      a = gets().chomp.to_i
    end  
  end

  def power(pow)
    map! { |a| a**pow }
  end
end