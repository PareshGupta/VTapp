require_relative '../lib/array.rb'

array = Array.new
0.upto(9) do |element|
  print 'Enter array element : '
  array[element] = gets.chomp
end
puts array.group_by_length
