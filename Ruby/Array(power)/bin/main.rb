require_relative '../lib/array.rb'

array = Array.new(5)

array.map! do |a| 
  print "Enter array element : "
  a = gets().chomp.to_i
end

print array.power(2)
