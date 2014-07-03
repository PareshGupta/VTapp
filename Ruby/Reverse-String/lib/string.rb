class String
  WORD_REGEX = /\S+/

  def reverse
    scan(String::WORD_REGEX).reverse.join(' ')
  end
end
