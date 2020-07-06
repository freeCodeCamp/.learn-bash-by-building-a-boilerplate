#!/bin/bash

if [[ ! -a website ]]
then 
  sudo rm -rf website
fi

if [[ ! -a website-boilerplate ]]
then 
  mkdir website-boilerplate
fi

if [[ ! -a toms-website ]]
then 
  mkdir toms-website
fi

find ./website-boilerplate -not -name '.' -not -name '..' -not -name 'website-boilerplate' -delete
cp -r ./freeCodeCamp/reset_files/website-boilerplate/. ./website-boilerplate

find ./toms-website -not -name '.' -not -name '..' -not -name 'toms-website' -delete
cp -r ./freeCodeCamp/reset_files/toms-website/. ./toms-website
