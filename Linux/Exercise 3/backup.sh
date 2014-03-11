#!/bin/bash 
#backup data 

Date=`date +%d_%m_%y_%H%M`
Filename="backupdata_$Date.tar.gz"
Srcdir="project"
tar -cpvzf $Filename $Srcdir

 

