class Fixnum

  def factorial
    factorial_number = 1
    1.upto(self) { |i| factorial_number *= i }
    factorial_number
  end

end
