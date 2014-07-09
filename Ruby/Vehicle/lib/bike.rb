class Bike < Vehicle

  def initialize(name, price, dealer)
    super(name, price)
    @dealer = dealer
  end

  def to_s
    "Dealer #{ @dealer} is selling the bike #{ @name } at price Rs #{ @price }/-"
  end

end
