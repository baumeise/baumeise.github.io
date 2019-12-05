#!/usr/bin/env sh

# abort on errors
set -e

sed -i -n "s/\(base:\).*/\1 \'\/amsel\/\'\,/" public/.vuepress/config.js

# build
vuepress build public

# navigate into the build output directory
cd public/.vuepress/dist

git init
git add -A

printf "Enter commit message: "
read any
git commit -m "$any"

git push -f git@github.com:baumeise/amsel master:gh-pages

cd -
sed -i -n "s/\(base:\).*/\1 \'\/\'\,/" public/.vuepress/config.js