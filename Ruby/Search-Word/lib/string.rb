class String

  def search_pattern(word)
    occurence_count = 0
    regex_to_search = Regexp.new(word, false)
    searched_string = gsub(regex_to_search) do |match|
      occurence_count += 1
      "(#{word})"
    end
    searched_string
  end

end

puts 'Enter a string : '
text = gets.chomp
puts 'Enter word to be search : '
word = gets.chomp
puts text.search_pattern(word)
