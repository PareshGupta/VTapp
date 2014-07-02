require_relative '../lib/string.rb'

print 'Enter a string : '
text = gets().chomp
puts text.palindrome?()

begin
	print 'Please quit the program(q/Q) : '
	choice = gets().chomp
end until choice == 'q' || choice == 'Q'