class Fixnum

  def factorial(n)
    num = 1
    (1..n).each { |i| num *= i }
    num
  end

end


