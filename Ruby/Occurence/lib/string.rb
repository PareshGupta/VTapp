class String
  PATTERN = /[a-z]/i

  def get_alphabets_count_hash
    alphabets = Hash.new(0)
    print "Occurence of each alphabet in a string is : "
    scan(String::PATTERN).each { |i| alphabets[i] = self.count(i) }
    alphabets
  end
end


