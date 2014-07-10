require_relative '../lib/product.rb'

product = Product.new
print 'Do you want to add More items to the list(y/n) : '
choice = gets.chomp
if choice == 'y'
  Product.new
else
  puts 'You Exit'
end