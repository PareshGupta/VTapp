class String

  def search_pattern(word)
    occurence_count = scan(/#{word}/i).size
    searched_string = gsub(/(?<word>#{word})/i, '(\k<word>)')
    "#{searched_string} \nTotal Occurence is #{occurence_count}"
  end

end
