require_relative '../lib/replace_vowel.rb'

print "Enter the string: "
text = gets().chomp
string = String.new
string.replace_vowels(text)
