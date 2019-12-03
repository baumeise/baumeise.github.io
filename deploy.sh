#!/usr/bin/env sh

# abort on errors
set -e

# build
vuepress build public

# navigate into the build output directory
cd public/.vuepress/dist

git init
git add -A

printf "Enter commit message: "
read any
git commit -m "$any"

git push -f git@github.com:baumeise/baumeise.github.io.git page:master

cd -