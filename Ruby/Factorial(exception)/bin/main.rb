require_relative '../lib/fixnum.rb'
require_relative '../lib/negative_number_error.rb'

begin
  print "Enter a number : "
  number = gets.chomp.to_i
  puts number.factorial
rescue NegativeNumberError
  puts 'No factorial for a negative number'
end
