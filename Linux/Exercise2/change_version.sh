#!/bin/bash
#changing version:1.0 to version:2.0 in a 

script_directory=$(dirname $0)
new_folder_path=$script_directory/project/abc/2.0
mkdir $new_folder_path
cp -r  $script_directory/project/abc/1.0/* $new_folder_path
sed -i '0,/Version:1.0/s/Version:1.0/Version:2.0/' $new_folder_path/code/*
