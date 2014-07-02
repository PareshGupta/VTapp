require_relative '../lib/vehicle.rb'

bike = Bike.new("Xtreme", 65000, "Raju")
puts bike.inspect
bike.price = 60000
puts bike.inspect