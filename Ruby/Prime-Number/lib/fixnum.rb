class Fixnum
  def generate_primes
    prime_array = Array.new()
    prime_array.push(2)
    prime_array.push(3)
    3.step(self, 2) do |number|
      is_prime = false
      3.step((number - 1), 2) do |divisor|
        if((number % divisor) == 0)
          is_prime = false
          break
        else
          is_prime = true
        end
      end

      if(is_prime)
        prime_array.push(number)
      end
    end
    prime_array
  end
end
