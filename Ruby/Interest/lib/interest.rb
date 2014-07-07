class Interest
  attr_accessor :principal, :time, :rate

  def initialize(principal, time)
    @principal = principal
    @time = time
    @rate = 10 / 100.to_f
  end

  def calculate_amount_simply
    @simple_amount = ((@principal * @rate * @time) + @principal).to_i
  end

  def calculate_amount_compoundly
    @compound_amount = (@principal * (1 + @rate) ** @time).to_i
  end

  def calculate_amount_difference
    @compound_amount - @simple_amount
  end

end