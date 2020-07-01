#!/bin/bash

if [[ ! -a website ]]
then 
  mkdir website
fi

find ./website -not -name '.' -not -name '..' -not -name 'website' -delete
cp -r ./freeCodeCamp/reset_files/website/. ./website

if [[ ! -a website/client/assets/icons ]]
then 
  mkdir website/client/assets/icons
fi
