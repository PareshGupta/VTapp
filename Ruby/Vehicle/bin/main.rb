require_relative '../lib/vehicle.rb'
require_relative '../lib/bike.rb'

bike = Bike.new('Xtreme', 65000, 'Raju')
puts bike
bike.price = 60000
puts bike
