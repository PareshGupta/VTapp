require_relative '../lib/array_hash.rb'

array = Array.new(9)
array.map! do |a| 
  print "Enter array element : "
  a = gets().chomp
end
puts array.group_by_length(array)