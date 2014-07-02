class String
  PATTERN = /[a-z]/i

  def count_alphabets()
    alphabets = Hash.new(0)
    print "Occurence of each alphabet in a string is : "
    scan(String::PATTERN).each { |i| alphabets[i] = self.count(i) }
    puts alphabets
  end
end


