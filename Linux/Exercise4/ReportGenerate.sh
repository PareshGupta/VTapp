#!/bin/bash
#Report Generation

path=$(dirname $0)
city=("Delhi" "Mumbai" "Kolkata" "Chennai")
domain=("@yahoo.com" "@gmail.com" "@hotmail.com" "@rediffmail.com")

echo "Details of 100 Users:"
for i in {0..100}
do
  cityname=${city[$RANDOM%4]}           #generating random city names
  domainname=${domain[$RANDOM%4]}       #generating randon domain names
  username=$((19999+RANDOM%29999))      #generating usernames
  ph_number=$((9871000000+RANDOM%9999999999))     #generating randomly phone numbers
  echo "$username$domainname ----- $cityname ----- $ph_number" >> $path/subscribers.txt
done

cat $path/subscribers.txt
