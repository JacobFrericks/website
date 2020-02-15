# Publish what is currently in master
git stash
git checkout gh-pages
git merge master
git push