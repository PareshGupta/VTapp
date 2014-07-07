class Integer

  def factorial
    factorial_number = 1
    for i in (1..self)
      factorial_number *= i
    end
    factorial_number
  end

  def pascal
    0.upto(self) do |i|
      yield(i)
    end
  end

end
