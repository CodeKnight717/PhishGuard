@echo off
git status > git_info.txt 2>&1
echo ---REMOTE--- >> git_info.txt
git remote -v >> git_info.txt 2>&1
