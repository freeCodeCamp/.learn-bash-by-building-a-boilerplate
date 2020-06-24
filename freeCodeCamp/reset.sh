#!/bin/bash

if [[ ! -a website ]]
then 
  mkdir website
fi

find ./website -not -name '.' -not -name '..' -not -name 'website' -delete
cp -r ./freeCodeCamp/reset_files/website/. ./website

if [[ ! -a website/client ]]
then 
  mkdir website/client
fi

if [[ ! -a website/client/src ]]
then 
  mkdir website/client/src
fi
