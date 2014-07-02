class String
  VOWELS_REGEX = /[aeiou]/i

  def replace_vowels()
    gsub(String::VOWELS_REGEX, '*')
  end
end
