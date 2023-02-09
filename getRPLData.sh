#!/bin/bash

REGEX='\([0-2][0-9]\|[3][0-1]\)/[0-1][0-9]/[0-9]\{4\}'

CGNA_PAGE='https://portal.cgna.intraer/'
RPL_PATH='sistemas/rpl'

RPL_RANGE=$(curl -sk ${CGNA_PAGE}${RPL_PATH} | grep -o ${REGEX})

RPL_START_DATE=$(echo ${RPL_RANGE} | awk '{ print $1}')

PARSED_RPL_DATE=$(echo ${RPL_START_DATE} | sed 's/\//-/g')

curl -sk "http://10.80.8.54:8000/api/$PARSED_RPL_DATE/manageStatusCGNA"

