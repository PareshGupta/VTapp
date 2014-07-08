class Interest
  attr_accessor :principal, :time, :rate

  def initialize
    yield self
  end

  def calculate_simple
    @interest = @principal * @rate * @time
  end

  def calculate_amount_simply
    @simple_amount = (@interest + @principal).to_i
  end

  def calculate_amount_compoundly
    @compound_amount = (@principal * (1 + @rate) ** @time).to_i
  end

  def calculate_amount_difference
    @compound_amount - @simple_amount
  end

end
