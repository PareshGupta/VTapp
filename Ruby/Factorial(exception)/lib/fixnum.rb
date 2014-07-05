class Fixnum

  def factorial
    begin
      if(self < 0)
        raise 'No factorial for a negative number'
      else
        num = 1
        (1..self).each { |i| num *= i }
      end
      "The factorial of a number is #{num}"
      rescue Exception => number
        number.message
    end
  end

end
