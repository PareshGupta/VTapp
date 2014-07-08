require_relative '../lib/name.rb'

puts 'Enter the first name :'
firstname = gets.chomp
puts 'Enter the last name :'
lastname = gets.chomp

name = Name.new(firstname, lastname)
puts name.validate!
