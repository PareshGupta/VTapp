#!/bin/bash
#appending http:// to the web addresses

script_dir=$(dirname $0)
sed  s/\ www\./http:\\/\\/www\./g ./$script_dir/company_name > ./$script_dir/company_name2
cat company_name2

