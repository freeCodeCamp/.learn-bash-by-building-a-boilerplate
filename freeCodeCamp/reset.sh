#!/bin/bash

if [[ ! -a website ]]
then 
  mkdir website
fi

find ./website -not -name '.' -not -name '..' -not -name 'website' -delete
cp -r ./freeCodeCamp/reset_files/website/. ./website
