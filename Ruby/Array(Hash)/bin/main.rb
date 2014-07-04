require_relative '../lib/array.rb'

array = Array.new(9)
array.map! do |element|
  print 'Enter array element : '
  gets.chomp
end
puts array.group_by_length
