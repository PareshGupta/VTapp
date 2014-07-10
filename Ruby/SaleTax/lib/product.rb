class Product
  REGEX_FOR_YES = /(yes)/i
  attr_reader :product_name, :imported_product, :tax_on_product, :product_price

  def initialize
    print 'Name of the product : '
    @product_name = gets.chomp
    print 'Imported : '
    @imported_product = gets.chomp
    print 'Exempted from Sales Tax :'
    @tax_on_product = gets.chomp
    print 'Price : '
    @product_price = gets.chomp.to_i
    calculate_import_duty
    calculate_sales_tax
    print calculate_total_price
  end

  def calculate_import_duty
    if REGEX_FOR_YES === imported_product
      @import_tax_amount = ((5 / 100.to_f) * product_price).to_f
    else
      @import_tax_amount = 0
    end
  end

  def calculate_sales_tax
    if REGEX_FOR_YES === tax_on_product
      @sales_tax_amount = 0
    else
      @sales_tax_amount = ((10 / 100.to_f) * product_price).to_f
    end
  end

  def calculate_total_price
    @total_price = (product_price + @import_tax_amount + @sales_tax_amount).round
  end

end
