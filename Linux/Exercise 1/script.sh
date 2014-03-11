#!/bin/bash

grep "Ltd." company_name | sed s/Ltd./Ltd.http:\\/\\//g > ./company_name2
cat company_name2
