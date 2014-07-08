require_relative '../lib/integer.rb'

puts 'Enter a number to find Pascal Triangle upto :'
number = gets.chomp.to_i

number.pascal do |i|
  0.upto(i) do |j|
    print i.calculate_number(j), ' '
  end
  print "\n"
end
