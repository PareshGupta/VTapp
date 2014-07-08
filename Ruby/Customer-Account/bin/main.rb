require_relative '../lib/customer.rb'

customer = Customer.new('Paresh')
puts "Hello Mr.#{ customer.name }"

puts "Which facility do you want to use \nPress 1 to deposit the amount \nPress 2 to withdraw the amount \nAny other key to exit"
choice = gets.chomp.to_i

case choice
  when 1
    puts 'Enter the amount to be deposit'
    deposit_amount = gets.chomp
    customer.deposit(deposit_amount)
    puts customer.check_balance
  when 2
    puts 'Enter the amount to be withdraw'
    withdraw_amount = gets.chomp
    customer.withdraw(withdraw_amount)
    puts customer.check_balance
  else
    puts 'You exit'
    false
end
