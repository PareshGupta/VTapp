class Customer
	attr_reader :name, :balance, :account_number
 	@@account_no = 0

  def initialize(name)
    @name = name
    @balance = 1000
    @@account_no += 1
  	@account_number = @@account_no
  end

  def deposit(amount)
    @balance += amount
    puts "Hello Mr.#{@name} \nRs#{amount}/- has been deposited in your account \nYour balance is Rs#{balance}/-"
  end
  
  def withdraw(amount)
    if amount >= @balance
      puts "Transaction cannot be done \nPlease check the balance"
    else
      @balance -= amount
      puts "Hello Mr.#{@name} \nRs#{amount}/- has been withdrawn from your account \nYour balance is #{balance}"
    end
  end
end

customer = Customer.new("Paresh")
# puts customer.inspect
customer.deposit(1000)
customer.withdraw(700)

customer2 = Customer.new("Bharat")
# puts customer2.inspect
customer2.deposit(3000)
customer2.withdraw(5700)