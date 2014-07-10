class Tax
  attr_reader :import_tax_amount, :sales_tax_amount
  REGEX_FOR_YES = /(yes)/i

  def calculate_import_duty
    if REGEX_FOR_YES === imported_product
      @import_tax_amount = ((5 / 100.to_f) * product_price).to_f
    else
      @import_tax_amount = 0.to_i
    end
  end

  def calculate_sales
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