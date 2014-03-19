#!/bin/bash 
#backup data 

script_dir=$(dirname $0)
Date=`date +%d_%m_%y_%H%M`
Filename="backupdata_$Date.tar.gz"
tar -cpvzf $script_dir/$Filename $script_dir/backupfolder/*

 

