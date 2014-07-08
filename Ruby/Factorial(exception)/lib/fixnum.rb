require_relative '../lib/negative_number_error.rb'

class Fixnum

  # number is converted to integer
  def factorial
    if(self < 0)
      raise NegativeNumberError, 'Invalid number'
    else
      num = 1
      (1..self).each { |i| num *= i }
    end
    "The factorial of a number is #{ num }"
  end

end
