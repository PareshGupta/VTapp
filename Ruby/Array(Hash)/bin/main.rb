require_relative '../lib/array.rb'

array = Array.new
0.upto(9) do
  print 'Enter array element : '
  array.push(gets.chomp)
end
puts array.group_by_length
