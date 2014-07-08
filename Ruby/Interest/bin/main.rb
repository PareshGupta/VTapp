require_relative '../lib/interest.rb'

print 'Enter the Principal amount : '
principal = gets.chomp.to_i
print 'Enter the Time period : '
time = gets.chomp.to_i

interest = Interest.new do |object|
  object.principal = principal
  object.time = time
  object.rate = 10 / 100.to_f
end

interest.calculate_simple
puts "Amount calculated by simple interest is Rs#{interest.calculate_amount_simply}/-"
puts "Amount calculated by compound interest is Rs#{interest.calculate_amount_compoundly}/-"
puts "Difference in amount calculated simply and compoundly is Rs#{interest.calculate_amount_difference}/-"
