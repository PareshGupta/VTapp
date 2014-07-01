class String
  Pattern = /[aeiou]|[AEIOU]/

  def replace_vowels(text)
    puts text.gsub(Pattern, '*')
  end
end
