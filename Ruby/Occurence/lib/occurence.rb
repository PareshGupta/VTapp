class String
  @@pattern = /[a-z]/i
  @@alphabets = Hash.new

  def count_alphabets(text)
    print "Occurence of each alphabet in a string is : "
    text.scan(@@pattern).each{ |i| @@alphabets[i] = text.count(i) }
    puts @@alphabets
  end
end


