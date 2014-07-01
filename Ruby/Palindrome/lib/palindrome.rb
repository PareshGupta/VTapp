class String
  @@pattern = /\s+/

  def check_palindrome(text)
    changed_string = text.downcase.gsub(@@pattern, '')
    puts changed_string == changed_string.reverse
    quit()
  end

  def quit
    print 'Please quit the program(q/Q) : '
    choice = gets().chomp
    if(choice == 'q' || choice == 'Q')
      puts "you quit"
      return false
    else
      quit()
    end
  end
end
