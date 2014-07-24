class PascalTriangle

  def generate(rows)
    0.upto(rows) do |row|
      number = 1
      0.upto(row) do |value|
        print number, ' '
        number = number * (row - value) / (value + 1)
      end
      yield
    end
  end

end
