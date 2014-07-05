require_relative '../lib/array.rb'

array = Array.new

0.upto(5) do
  print 'Enter array element : '
  array.push(gets.chomp.to_i)
end

print array.power(2)
