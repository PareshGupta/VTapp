require_relative '../lib/string.rb'

puts "Enter a string :"
text = gets().chomp
puts text.count_characters(text)