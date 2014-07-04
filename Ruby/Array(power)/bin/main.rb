require_relative '../lib/array.rb'

array = Array.new(5)

array.map! do |element| 
  print 'Enter array element : '
  gets.chomp.to_i
end

print array.power(2)
