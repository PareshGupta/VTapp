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
    if(amount < 100)
      'Minimum Rs100/- has to be deposit'
    else
      @balance += amount
      "Rs#{amount}/- has been deposited in your account. \nYour Balance is Rs#{balance}/-"
    end
  end

  def withdraw(amount)
    if amount > @balance
      "Transaction cannot be done \nPlease check the balance"
    else
      @balance -= amount
      "Rs#{amount}/- has been withdrawn from your account \nYour Balance is Rs#{balance}/-"
    end
  end
end
