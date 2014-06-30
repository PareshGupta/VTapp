class Count
  def alphabets
    print "Enter a string : "
    string = gets()
    print "Occurence of each alphabet in a string is : "
    alphabets_count = Hash.new
    string.scan(/[a-z]|[A-Z]/).each{|i| 
      alphabets_count[i] = string.count(i)
    }
    puts alphabets_count
  end
end

count = Count.new
count.alphabets

