require_relative '../lib/pascal_triangle.rb'

puts 'Enter a number to find Pascal Triangle upto :'
number = gets.chomp.to_i
pascal_triangle = PascalTriangle.new
pascal_triangle.generate(number) { print "\n" }
