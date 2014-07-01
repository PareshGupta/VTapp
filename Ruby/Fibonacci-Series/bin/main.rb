require_relative '../lib/fibonacci_series.rb'
series = Series.new
puts("fibonacci series is : ")
series.fibonacci(1000) { |num| print num, " " }