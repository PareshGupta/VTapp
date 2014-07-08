require_relative '../lib/fixnum.rb'

print 'Enter a number upto which you want to generate prime series : '
number = gets.chomp.to_i
print number.generate_prime_upto
