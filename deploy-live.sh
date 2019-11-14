#!/usr/bin/env sh

# abort on errors
set -e

sed -i -n "s/\(base:\).*/\1 \'\/amsel\/\'/" ./docs/.vuepress/config.js

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m "Deploy Live"

git push -f git@github.com:moritzgvt/amsel.git master:gh-pages

cd -

sed -i -n "s/\(base:\).*/\1 \'\/amseldocs\/\'/" ./docs/.vuepress/config.js