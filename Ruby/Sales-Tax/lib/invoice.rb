require_relative '../lib/product.rb'

class Invoice
  attr_accessor :products

  def initialize(products_array)
    @products = products_array
  end

  def total_price
    calculate_total_price.round
  end

  def calculate_total_price
    products.inject(0) { |sum, product| sum += product.net_price }
  end

  def generate
    puts products
    "Grand Total : Rs#{ total_price }/-"
  end
end
