class Replace
  def vowel
    print "Enter the string: "
    string = gets()
    puts string.gsub(/[aeiou]/, '*')
  end
end
