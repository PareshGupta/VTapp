#!/bin/bash
#backtick command
lines=`cat $1 | wc -l`
echo THe number of lines in the file $1 is $lines

