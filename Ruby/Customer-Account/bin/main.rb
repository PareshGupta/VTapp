require_relative '../lib/customer_account.rb'

customer = Customer.new("Paresh")
puts customer.inspect
customer.deposit(1000)
customer.withdraw(700)

customer2 = Customer.new("Bharat")
puts customer2.inspect
customer2.deposit(3000)
customer2.withdraw(5700)