require_relative '../lib/string.rb'

puts 'Enter a string :'
string = gets.chomp
puts "The reverse of the sentence is : #{ string.arrange_words_in_reverse_order }"
