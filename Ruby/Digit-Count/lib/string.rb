class String

  def get_digits
    scan(/\d/)
  end

  def count_digits
    get_digits.count
  end
end
