**How to use Git & GitHub**

# GitHub Flow

Refer from [here](https://guides.github.com/introduction/flow/).

## Checkout new Branch from Master-branch

```console
// Check the current branch:
$ git branch

// If you are not in master-branch:
$ git checkout master

// Create new development-branch
$ git checkout -b my_name/working_detail
```

### Point

Development in team, we have to note the others **What I'm doing Now** in working-branch,
so we should write `user name` and `working detail` in branch name.  

```console
// When Tom create chatbot:
$ git checkout -b tom/create-chatbot
```

## First commit and push GitHub

Working on development-branch and create some files, you do push them remote(GitHub) next.  
Now, we are going on that remote is named `origin`.

```console
// Add all files on stage:
$ git add .

// Check the contents on stage which is not still commited:
// If something wrong you need dealing with.
$ git status

// Commit:
$ git commit -m "First commit"

// Push to remote:
$ git push origin my_name/working_detail
```

## Create Pull Request on GitHub

Move to **GitHub**.  
Select the `Pull Requests` and setting `master <- my_name/working_detail`.  

Next you have to write comment, so you should write **Why** you do and **What** you do on this branch.  
And you had better to write［WIP］on title.

## Working...

When you write some code and you should commit them, refer from [First commit and push GitHub](#first-commit-and-push-github).

## Code Review

Before merging working-branch to master, you have to assign someone to review the code.  
You can setting `Reviwers` at Pull Request Page on GitHub.

## Merge working-branch to master

```console
$ git checkout master
$ git merge --no-ff my_name/working_detail
$ git push origin master
```

After `git push origin master` command, Pull Request may be closed from GitHub.  
And you should **delete remote branch on GitHub** at `DELETE Button`.  

Next, you should **delete remote & working branch from local** as below.

```console
// Check all exist branch on local:
$ git branch -a

// Check the current branch:
$ git branch

// If you are not in master-branch:
$ git checkout master

// Pull the most recent code from master and update deleted branch:
$ git pull -p

// Delete the development-branch on local:
$ git branch -d my_name/working_detail
```

That is All.

# How to Reference

## Q. Pull remote's master into local, defference is exist between some files.

When you working on development-branch, master has been updated and you need pull them.
But some files were changed on both remote and local, it will cause conflict.

```console
$ git checkout master
$ git pull
$ git checkout my_name/working_detail

// Soleve conflict:
$ git rebase master

// When you push remote, you have to add --force option
$ git push -f origin my_name/working_detail
```

You can check the commits detail on `GitHub -> Insights -> Network`.

## Q. Add wrong commit and push it to remote.

### Ex. Mistake .gitignore

You can overwrite the wrong commit and push the correct commited files.

```console
// Check logs:
$ git log --oneline

// Select logs number that is just before making mistake:
$ git reset --soft commit_number

// Check stage information:
$ git status

// If some files are already added on stage:
$ git reset

// Create correct commit:
$ git add .
$ git commit -m "Fixed .gitignore"
$ git push -f origin my_name/working_detail
```
