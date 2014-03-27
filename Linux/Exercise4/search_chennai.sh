#!/bin/bash
#select users from Chennai and copying to new file

current_path=$(dirname $0)
grep "Chennai" $current_path/subscribers.txt > $current_path/chennai.txt
cat $current_path/chennai.txt
