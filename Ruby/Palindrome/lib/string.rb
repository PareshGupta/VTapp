class String
  CHECK_PALINDROME_REGEX = /\s+/

  def palindrome?
    changed_string = downcase.gsub(String::CHECK_PALINDROME_REGEX, '')
    changed_string == changed_string.reverse
  end

end
