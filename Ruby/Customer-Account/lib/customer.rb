class Customer
	attr_accessor :name, :balance, :account_number
 	@@account_no = 99111003461124

  def initialize(name)
    @name = name
    @balance = 1000
  	@account_number = @@account_no
    @@account_no += 1
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