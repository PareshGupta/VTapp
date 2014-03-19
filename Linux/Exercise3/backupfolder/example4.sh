#!/bin/bash
#creating a menu 

selection=
until [ "$selection" = 0 ]; do 
	echo "
	PROGRAM MENU
	1 - DISPLAY FREE DISK SPACE
	2 - DISPLAY FREE MEMORY
	0 - exit program"

	echo -n "Enter selection"
	read selection
 	echo ""
	case $selection in 
		1 ) df ;;
		2 ) free ;;
		0 ) exit ;;
		* ) echo "Please enter 1, 2, 0r 0"
	esac
done
