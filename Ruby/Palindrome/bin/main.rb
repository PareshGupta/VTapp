require_relative '../lib/palindrome'

print 'Enter a string : '
text = gets().chomp
string = String.new
string.check_palindrome(text)
