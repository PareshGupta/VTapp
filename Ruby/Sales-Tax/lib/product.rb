class Product
  REGEX_FOR_NO = /^(n|no)$/i
  REGEX_FOR_YES = /^(y|yes)$/i
  SALES_TAX = 0.1
  IMPORT_DUTY = 0.05
  attr_reader :price, :total_price, :name, :total_tax, :exempted_sales_tax, :imported

  def initialize(product_name, price, imported, exempted_sales_tax)
    @name = product_name
    @exempted_sales_tax = exempted_sales_tax
    @imported = imported
    @price = price.round
    @total_tax = calculate_total_tax
    @total_price = price_including_tax.round
  end

  def price_including_tax
    total_price = price + total_tax
  end

  def calculate_sales_tax
    (price * SALES_TAX).round if exempted_sales_tax =~ REGEX_FOR_NO
  end

  def calculate_import_duty
    (price * IMPORT_DUTY).round if imported =~ REGEX_FOR_YES
  end

  def calculate_total_tax
    calculate_sales_tax.to_i + calculate_import_duty.to_i
  end

  def to_s
    "#{ name }.....Rs#{ price }/-.....Rs#{ total_tax }/-.....Rs#{ total_price }/-"
  end

end
