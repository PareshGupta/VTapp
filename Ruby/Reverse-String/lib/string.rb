class String
  WORD_REGEX = /\S+/

  def reverse(text)
    text.scan(String::WORD_REGEX).reverse.join(' ')
  end
end
