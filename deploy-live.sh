#!/usr/bin/env sh

# abort on errors
set -e

sed -i "s/\(base:\).*/\1 \'\/amsel\/\'/" ./public/.vuepress/config.js

# build
vuepress build public

# navigate into the build output directory
cd public/.vuepress/dist

git init
git add -A
git commit -m "Deploy Live"

git push -f git@github.com:moritzgvt/amsel.git master:gh-pages

cd -

sed -i "s/\(base:\).*/\1 \'\/amseldocs\/\'/" ./public/.vuepress/config.js