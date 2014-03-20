#!/bin/bash 
#backup data 

script_dir=$(dirname $0)
date=`date +%d_%m_%y_%H%M`
filename="backupdata_$date.tar.gz"
tar -cvzf $script_dir/$filename $script_dir/backupfolder/*
