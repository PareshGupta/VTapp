class Count
  def alphabets
    print "Enter a string : "
    string = gets()
    print("No of alphabets in the string is : ")
    puts string.count("a-zA-Z")
  end
end

count = Count.new
count.alphabets


