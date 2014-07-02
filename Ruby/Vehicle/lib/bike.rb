class Bike < Vehicle
  attr_accessor :dealer

  def initialize(name, price, dealer)
    super(name, price)
    @dealer = dealer
  end

end