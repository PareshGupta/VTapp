class String

=begin
  Regex Description :- Here, (?<word>) is like a variable 'word',
  which stores the search word in a string.
  \k<word> is a way to access the search word.
=end

  def search_and_highlight_pattern(word)
    occurence_count = scan(/#{ word }/i).size
    searched_string = gsub(/(?<word>#{ word })/i, '(\k<word>)')
    "#{ searched_string } \nTotal Occurence is #{ occurence_count }"
  end

end
