require_relative '../lib/time.rb'

time1 = DateTime.parse('12:43:50')
time2 = DateTime.parse('22:19:21')
time_array = Array.new
time_array.push(time1, time2)
time = Time.new
time.sum_each_unit(time_array)
puts time.calculate_total
