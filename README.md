# git_practice

## How to contribute to this repo

1. Create a fork of this repo (there is a fork button in the corner). 
   **Why:** When you push changes, it doesn't suddenly hit the main repo. Anyone can fork the repo easily, and everyone has access to their own version of the fork. They make changes to their own versions, and then make *pull requests* to the main repository. 
1. Now, you can `git clone` your fork. `git clone <url to your repo>`. 
1. Make your changes
1. Now add your changes. `git add <filenames>`. Or you can add everything at once, with `git add .` (Beware : When using git add . , you may accidentally add files like `npm_modules` and other directories you shouldn't be adding). 
1. Commit your changes. 'Commit' is like hitting save, now you can roll back to this state of your code anytime. Write 'git commit -m "A nice commit message"'. To learn how to write commit messages : https://www.freecodecamp.org/news/writing-good-commit-messages-a-practical-guide/ 
1. Now your changes are saved locally. Time to upload them (these will go to your forked repo). Just do a `git push origin (main/master)`
1. Once this is done, you will make a **pull request** from your forked repo to the main repo. Once you make this request, someone with
   write access to the repo will review it and merge your code. 

**Task** : 
Make a fork of this repo, clone it, add a file <yourname.txt> and commit. Now, make a pull request to this repository. 

