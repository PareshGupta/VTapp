require_relative '../lib/time.rb'

time = Time.new
time_array = Array.new
puts time_array
0.upto(2) do |i|
  puts 'Enter the time'
  time_array.push(gets.chomp)
end

puts time.parse_and_push_to_array(time_array)
