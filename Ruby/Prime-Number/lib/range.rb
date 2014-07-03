class Fixnum
  def prime_number(number)
    for i in (2..number)
      if((number % i) == 0)
        puts i
      else
        puts "not a prime #{i}"
      end
    end
  end
end

puts "Enter a number"
number = gets().chomp.to_i
puts number.prime_number(number)