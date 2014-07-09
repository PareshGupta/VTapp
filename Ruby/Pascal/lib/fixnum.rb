class Fixnum

  def factorial
    factorial_number = 1
    for i in (1..self)
      factorial_number *= i
    end
    factorial_number
  end

end
