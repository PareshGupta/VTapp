require_relative '../lib/integer.rb'

puts 'Enter a number to find Pascal Triangle upto :'
number = gets.chomp.to_i
pascal = Pascal.new
pascal.series_upto(number) { print "\n" }
