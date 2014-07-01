require_relative '../lib/occurence.rb'

print "Enter a string : "
text = gets().chomp
string = String.new
string.count_alphabets(text)