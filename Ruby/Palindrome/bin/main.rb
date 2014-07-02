require_relative '../lib/palindrome'

print 'Enter a string : '
text = gets().chomp
text.check_palindrome()
