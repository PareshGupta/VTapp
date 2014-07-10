require_relative '../lib/time.rb'

time = Time.new
puts 'Enter the first time'
time1 = gets.chomp
puts 'Enter the second time'
time2 = gets.chomp

if time.validate(time1) && time.validate(time2)
  time1 = DateTime.parse(time1)
  time2 = DateTime.parse(time2)
  time_array = Array.new
  time_array.push(time1, time2)
  time.sum_total_each_unit(time_array)
  time.calculate_total
  puts time
else
  print 'Invalid Time'
end
