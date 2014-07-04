class String
  WORD_REGEX = /\S+/

  def arrange_words_in_reverse_order
    scan(WORD_REGEX).reverse.join(' ')
  end
end
