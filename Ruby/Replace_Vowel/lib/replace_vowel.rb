class String
  PATTERN = /[aeiou]/i

  def replace_vowels()
    self.gsub(String::PATTERN, '*')
  end
end
