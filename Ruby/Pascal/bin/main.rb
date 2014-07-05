require_relative '../lib/integer.rb'

puts 'Enter a number to find Pascal Triangle upto :'
number = gets.chomp.to_i

pascal do |i|
  0.upto(i) do |j|
    print ( factorial(i) / ( factorial(j) * factorial(i - j) ) ), ' '
  end
end
