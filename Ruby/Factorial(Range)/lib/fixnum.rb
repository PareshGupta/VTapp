class Fixnum

  def factorial
    num = 1
    (1..self).each { |i| num *= i }
    num
  end

end