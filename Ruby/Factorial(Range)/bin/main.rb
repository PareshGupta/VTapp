require_relative '../lib/fixnum.rb'

print "Enter a number : "
number = gets().chomp.to_i
puts  "The factorial of a number is #{number.factorial(number)}"