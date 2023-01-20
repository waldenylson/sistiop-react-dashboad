#!/bin/bash

REGEX='\([0-2][0-9]\|[3][0-1]\)/[0-1][0-9]/[0-9]\{4\}'

CGNA_PAGE='https://portal.cgna.intraer/'
RPL_PATH='sistemas/rpl'

RPL_RANGE=$(curl -sk ${CGNA_PAGE}${RPL_PATH} | grep -o ${REGEX})

echo ${RPL_RANGE} | awk '{ print "RPL Atual\t: " $1 " (válido até: " $2")"}'
echo ${RPL_RANGE} | awk '{ print "RPL Anterior\t: " $3 " (válido até: " $4")"}'

