require_relative '../lib/amount_error.rb'

class Customer
  attr_reader :name, :account_number, :balance
  @@account_no = 99111003461124

  def initialize(name)
    @name = name
    @balance = 1000
    @account_number = @@account_no
    @@account_no += 1
  end

  # minimum deposit amount is Rs100/- and always in round-off figure
  def deposit(amount)
    if(amount.to_i < 100)
      raise AmountError, 'Insufficient Amount'
    else
      @balance += amount.to_i
    end
  end

  # withdraw amount always in round-off figure
  def withdraw(amount)
    if amount.to_i > @balance
      raise AmountError, 'Insufficient Balance'
    else
      @balance -= amount.to_i
    end
  end

  def check_balance
    "Remaining Balance is Rs#{ balance }/-"
  end
end
