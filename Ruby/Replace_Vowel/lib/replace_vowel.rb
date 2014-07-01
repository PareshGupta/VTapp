class String
  @@pattern = /[aeiou]/i

  def replace_vowels(text)
    puts text.gsub(@@pattern, '*')
  end
end
