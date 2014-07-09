require_relative '../lib/fixnum.rb'

class Pascal

  def series_upto(limit)
    0.upto(limit) do |number|
      0.upto(number) do |value|
        print number.factorial / (value.factorial * (number - value).factorial), ' '
      end
      yield
    end
  end

end
