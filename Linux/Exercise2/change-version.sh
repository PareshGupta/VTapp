#!/bin/bash
#changing version:1.0 to version:2.0 in a 

script_dir=$(dirname $0)
cp -r $script_dir/project/abc/1.0/* $script_dir/project/abc/2.0
grep -lr "Version:1.0" $script_dir/project/abc/2.0/* | xargs sed -i  "s/Version:1.0/Version:2.0/g"

