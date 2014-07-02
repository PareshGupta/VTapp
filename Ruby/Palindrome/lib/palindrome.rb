class String
  CHECK_PALINDROME_REGEX = /\s+/

  def palindrome?
    changed_string = downcase.gsub(String::CHECK_PALINDROME_REGEX, '')
    changed_string == changed_string.reverse
  end

  def quit
    print 'Please quit the program(q/Q) : '
    choice = gets().chomp
    if(choice == 'q' || choice == 'Q')
      "you quit"
    else
      quit()
    end
  end
end
