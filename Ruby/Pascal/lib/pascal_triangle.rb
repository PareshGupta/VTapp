class PascalTriangle

  def generate(rows)
    0.upto(rows) do |num|
      number = 1
      0.upto(num) do |value|
        print number, ' '
        number = number * (num - value) / (value + 1)
      end
      yield
    end
  end

end
