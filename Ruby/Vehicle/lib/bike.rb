class Bike < Vehicle

  def initialize(name, price, dealer)
    super(name, price)
    @dealer = dealer
  end

end
