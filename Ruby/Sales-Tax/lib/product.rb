class Product
  REGEX_FOR_NO = /^(n|no)$/i
  REGEX_FOR_YES = /^(y|yes)$/i
  SALES_TAX = 0.1
  IMPORT_DUTY = 0.05
  attr_reader :price, :total_price, :name, :sales_tax, :import_duty, :total_tax

  def initialize(product_name, price, import_duty, sales_tax)
    @name = product_name
    @sales_tax = sales_tax
    @import_duty = import_duty
    @price = price.round
    @total_tax = calculate_tax.round
    @total_price =  price_including_tax.round
  end

  def price_including_tax
    total_price = price + total_tax
  end

  def calculate_tax
    sales_tax_price, import_duty_price = 0, 0
    sales_tax_price = (price * SALES_TAX).round if(sales_tax =~ REGEX_FOR_NO)
    import_duty_price = (price * IMPORT_DUTY).round if(import_duty =~ REGEX_FOR_YES)
    total_tax = sales_tax_price + import_duty_price
  end

  def to_s
    "#{ name }.....Rs#{ price }/-.....Rs#{ total_tax }/-.....Rs#{ total_price }/-"
  end

end
