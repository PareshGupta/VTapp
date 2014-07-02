class Vehicle
  attr_reader :name, :price

  def initialize(name, price)
    @name = name
    @price = price
  end

  def price=(price)
    @price = price
  end
end

class Bike < Vehicle
  attr_reader :dealer

  def initialize(name, price, dealer)
    super(name, price)
    @dealer = dealer
  end
end
