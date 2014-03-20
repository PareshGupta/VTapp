#!/bin/bash
#select users from Chennai and copying to new file

script_dir=$(dirname $0)
grep "Chennai" $script_dir/subscribers.txt > $script_dir/chennai.txt
cat $script_dir/chennai.txt
