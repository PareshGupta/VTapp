require 'prime'

class Fixnum

  def generate_prime_upto
    prime_array = Array.new
    (1..self).step(2) do |number|
      if(number.prime?)
        prime_array.push(number)
      end
    end
    prime_array
  end

end
