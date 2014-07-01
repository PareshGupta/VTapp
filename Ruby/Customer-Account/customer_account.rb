class Customer
  attr_accessor :name
  attr_reader :account_no

  def initialize(name, account_no, balance)
    @name = name
    @account_no = account_no
    @balance = balance
  end

  def account_no=(account_no)
    @account_no = account_no
  end
end

customer = Customer.new("Paresh", 11000999934618, 1000)
puts customer.inspect
puts customer.name
puts customer.account_no

