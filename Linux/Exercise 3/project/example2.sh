#!/bin/bash
#example for case 

echo -n "type a character."
read character
case $character in 

	[[:lower:]] | [[:upper:]] ) echo "you entered a letter $character"
				    ;;

	[0-9] ) 		    echo "you entered a digit $character"
				    ;;
	* )			    echo "you enter something else"
				    ;;
esac

