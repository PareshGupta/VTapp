class String

  def search_pattern(word)
    occurence_count = 0
    regex_to_search = Regexp.new(word, true)
    searched_string = gsub(regex_to_search) do |match|
      occurence_count += 1
      "(#{word})"
    end
    "#{searched_string} \nTotal Occurence is #{occurence_count}"
  end

  def check_character_case

end
