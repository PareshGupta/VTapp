#!/bin/bash 
#backup data 

script_directory=$(dirname $0)
date=`date +%d_%m_%y_%H%M`
backup_folder="backupdata_$date.tar.gz"
tar -cvzf $script_directory/$backup_folder $script_directory/backupfolder/*
