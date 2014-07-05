require_relative '../lib/interest.rb'

print 'Enter the Principal amount : '
principal_amount = gets.chomp.to_i
print 'Enter the Time period : '
time_period = gets.chomp.to_i

interest = Interest.new(principal_amount, time_period)
puts interest.inspect
puts interest.calculate_simple_interest
puts interest.calculate_compound_interest