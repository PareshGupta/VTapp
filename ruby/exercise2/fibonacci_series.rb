class Series
  def fibonacci(max)
    value1, value2 = 1, 1
    while value1 <= max 
      yield value1
      value1, value2 = value2, value1+value2
    end
  end
end

object = Series.new
puts("fibonacci series is : ")
object.fibonacci(1000) {|num| print num, " "}
puts