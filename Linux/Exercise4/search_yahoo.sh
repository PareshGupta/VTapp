#!/bin/bash
#searching users with id @yahoo.com
#copying the list to other file

current_path=$(dirname $0)
grep "@yahoo.com" $current_path/subscribers.txt > $current_path/yahoo.txt
cat $current_path/yahoo.txt
