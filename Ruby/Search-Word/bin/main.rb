require_relative '../lib/string.rb'

puts 'Enter a string : '
text = gets.chomp
puts 'Enter word to be search : '
word = gets.chomp
puts text.search_pattern(word)
