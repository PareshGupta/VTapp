class String
  PATTERN = /[aeiou]/i

  def replace_vowels()
    gsub(String::PATTERN, '*')
  end
end
