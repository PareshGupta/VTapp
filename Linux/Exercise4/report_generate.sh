#!/bin/bash
#Report Generation

current_path=$(dirname $0)
cities=("Delhi" "Mumbai" "Kolkata" "Chennai")
domains=("@yahoo.com" "@gmail.com" "@hotmail.com" "@rediffmail.com")

echo "Details of 100 Users:"
for i in {0..100}
do
  city_name=${cities[$RANDOM%4]}           #generating random city names
  domain_name=${domains[$RANDOM%4]}       #generating randon domain names
  user_name=$((19999+RANDOM%29999))      #generating usernames
  phone_number=$((9871000000+RANDOM%9999999999))     #generating randomly phone numbers
  echo "$user_name$domain_name ----- $city_name ----- $phone_number" >> $current_path/subscribers.txt
done

cat $current_path/subscribers.txt
