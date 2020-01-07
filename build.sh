#!/bin/bash

# yarn build

# rm -rf ../abz.testing.production/css
# rm -rf ../abz.testing.production/fonts
# rm -rf ../abz.testing.production/img
# rm -rf ../abz.testing.production/js
# cp -r dist/* ../abz.testing.production/
# cd ../abz.testing.production/
# git add --all

# git commit -m "$(date)"
# git push





# остановить публикацию при ошибках
set -e

# сборка
yarn build
echo Built!

# переход в каталог сборки
cd dist

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'


# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:m-nick/abz.agency.testing.git master:gh-pages
echo Deployed!
cd -