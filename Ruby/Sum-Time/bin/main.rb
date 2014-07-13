require_relative '../lib/time.rb'

puts 'Enter the first time'
time1 = gets.chomp
puts 'Enter the second time'
time2 = gets.chomp

puts Time.new.sum(time1, time2)
