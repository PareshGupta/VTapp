require_relative '../lib/product.rb'

class Invoice
  attr_accessor :products, :total_price

  def initialize (products_array)
    @products = products_array
  end

  def calculate_total
    @total_price  = products.inject(0) { |sum, product| sum += product.total_price }
  end

  def generate_invoice
    data = Array.new
    products.each do |item_row| 
      item_row
    end
  end

  def to_s
    "Grand Total : #{ calculate_total }"
  end

end
