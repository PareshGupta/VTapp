#!/bin/bash
#appending http:// to the web addresses

script_directory=$(dirname $0)
sed  s/\ www\./http:\\/\\/www\./g ./$script_directory/company_name > ./$script_directory/company_name2
cat ./$script_directory/company_name2
