#!/bin/bash
#Report Generation

script_dir=$(dirname $0)
city_name=("Delhi" "Chennai" "Kolkata" "Mumbai")
domain_name=("yahoo.com" "gmail.com" "hotmail.com" "rediffmail.com")

for i in {0..100}
do 
  ran=$[$RANDOM%3]
  city=${city_name[$ran]}
  pos=1
  len=5  	#lenght upto 5 characters
  str1=$( echo "$RANDOM%10000" )
  username="${str1:$pos:$len}"
  ran1=$RANDOM%3
  hostname=${domain_name[$ran1]}
  echo "$username@$hostname||$city||$((9876500000 + $RANDOM%1000000000))">> $script_dir/subscribers.txt
done
cat $script_dir/subscribers.txt
