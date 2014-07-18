require_relative '../lib/product.rb'

class Invoice
  attr_accessor :products, :total_price

  def initialize(products_array)
    @products = products_array
  end

  def calculate_total_price
    @total_price = products.inject(0) { |sum, product| sum += product.total_price }
  end

  def generate_invoice
    products.each { |item_row| item_row }
  end

  def to_s
    "Grand Total : Rs#{ calculate_total_price }/-"
  end

end
