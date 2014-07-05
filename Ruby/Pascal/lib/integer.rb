class Integer

  def factorial(num)
    factorial_number = 1
    for i in (1..num)
      factorial_number *= i
    end
    factorial_number
  end

  def pascal(number)
    0.upto(number) do |i|
      yield(i)
      "\n"
    end
  end

end
