require_relative '../lib/time.rb'

puts 'Enter the first time'
time1 = gets.chomp
puts 'Enter the second time'
time2 = gets.chomp

time = Time.new
puts time.parse_and_push_to_array(time1, time2)
