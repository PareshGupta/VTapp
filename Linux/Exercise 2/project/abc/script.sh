#!/bin/bash
#changing version:1.0 to version:2.0 in a file
cp -r 1.0 2.0
grep -lr "Version:1.0" ./2.0/code | xargs sed -i  "s/Version:1.0/Version:2.0/g"

