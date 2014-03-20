#!/bin/bash
#searching users with id @yahoo.com
#copying the list to other file

script_dir=$(dirname $0)
grep "@yahoo.com" $script_dir/subscribers.txt > $script_dir/yahoo.txt
cat $script_dir/yahoo.txt
