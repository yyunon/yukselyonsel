#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# Hash hack
cp index.html 404.html

# if you are deploying to a custom domain
echo 'http://yukselyonsel.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:yyunon/yukselyonsel.git master:dist

cd -
