#!/bin/bash
#changing version:1.0 to version:2.0 in a 

script_dir=$(dirname $0)
path=$script_dir/project/abc/2.0
mkdir $path
cp -r  $script_dir/project/abc/1.0/* $path
sed -i "s/Version:1.0/Version:2.0/g" $path/code/*
