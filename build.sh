#!/bin/bash

# stop publicating if errors
set -e

yarn build
echo Built!

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:m-nick/abz.agency.testing.git master:gh-pages
echo Deployed!
cd -