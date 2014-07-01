class String
  PATTERN = /[a-z]/i

  def count_alphabets(text)
    alphabets = Hash.new(0)
    print "Occurence of each alphabet in a string is : "
    text.scan(String::PATTERN).each { |i| alphabets[i] = text.count(i) }
    puts alphabets
  end
end


