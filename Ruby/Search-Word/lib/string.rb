class String

  def search(word)
    regex = /("#{word}")/  # regex not working and add ignoring case
    gsub(regex, "(#{word})")
  end

end

puts 'Enter a string : '
text = gets().chomp
puts 'Enter word to be search : '
word = gets().chomp
puts text.search(word)