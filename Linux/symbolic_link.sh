#!/bin/bash
#Creating a symbolic link

mkdir yahoo google   #creating directories
cd yahoo             #changing to yahoo directory
echo "Add Content to the file"
cat > conf.txt       #creating a file 

cd ../google         #going back to google directory
ln -s ../yahoo/conf.txt conf_link.txt   
