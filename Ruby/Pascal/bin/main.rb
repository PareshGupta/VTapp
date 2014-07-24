require_relative '../lib/pascal_triangle.rb'

puts 'Enter a number to find Pascal Triangle upto :'
number_of_rows = gets.chomp.to_i
pascal_triangle = PascalTriangle.new
pascal_triangle.generate(number_of_rows) { print "\n" }
