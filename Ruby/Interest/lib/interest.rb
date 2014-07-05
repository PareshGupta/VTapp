class Interest
  attr_accessor :pricipal, :time, :rate
  @@rate = 10 / 100

  def initialize(pricipal, time)
    @pricipal = pricipal
    @time = time
  end

  def calculate_simple_interest
    @amount_simple_interest = (@pricipal * @@rate * @time) + @principal
    @amount_simple_interest
  end

  def calculate_compound_interest
    @amount_compound_interest = @principal * (1 + @@rate) ** @time
    @amount_compound_interest
  end

  def calculate_amount_difference
    @amount_compound_interest - @amount_simple_interest
  end

end