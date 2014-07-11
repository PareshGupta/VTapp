require_relative '../lib/product'
require_relative '../lib/invoice'

product_array = Array.new

begin
  print 'Name of the product : '
  product_name = gets.chomp

  print 'import_duty?(yes/no): '
  import_duty = gets.chomp

  print 'Exempted from tax?(yes/no) : '
  sales_tax = gets.chomp

  print 'Price: '
  price = gets.to_f

  product_array.push(Product.new(product_name, price, import_duty, sales_tax))
  print 'Do you want to continue(y/n) ?'
  choice = gets.chomp
end while(/^(y|yes)$/i === choice)

invoice = Invoice.new(product_array)
puts invoice.generate_invoice
puts invoice
