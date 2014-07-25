require_relative '../lib/string.rb'

print 'Enter the string : '
string = gets.chomp

p "Total number of digits in a string is #{ string.count_digits }"
