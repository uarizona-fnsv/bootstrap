# FSO Bootstrap

This is a fork of Bootstrap v4 with slight modifications for UA coloring and fonts.

### Updating from Bootstrap

Twitter's repository is set up as remote 'twitter', so to update with the latest version simply pull and rebase. However, best practice may be to pull into a new branch and resolve the likely merge conflicts before merging with our master branch.

Until v4 is final, the remote branch to pull from is `v4-dev`.

```shell
git fetch twitter v4-dev
git rebase twitter/v4-dev
```

Fortunately, most of our code edits are held within custom files that won't necessarily create merge conflicts.

### Getting started

You will need to have a few things installed globally. Node, npm, bower, and Ruby in particular.

To work with the docs server, you will also need bundle and grunt.

```shell
npm install -g grunt-cli
gem install bundler
```

You will need to run a few commands to get your enviornment up and running:

```shell
npm install
bower install
bundle install
```

### Development

Most variables and settings are taken care of through the `scss/_custom.scss` file.

Documentation is found in the `docs/` folder. Please update documentation with any changes to how things work. As of right now, this is only necessary for our custom components.

The documentation site is built using [Jekyll](https://jekyllrb.com/docs/home/), which is a simple to use, markdown-based static-site generator. Generally this means you can write some information in a markdown file, include some examples, then you'll be good to go!

#### Development Tools Usage

To test and lint, use `grunt test`.

To build the docs server (i.e. you are editing documentation or want to see how your changes look), run  `npm run rebuild-docs`, which will delete the existing (if any) docs deployment and then run necessary grunt tasks to build the documentation.

To start the docs server, run `bundle exec jekyll serve` and you'll find it at `http://localhost:9001`.

Once the server is running, a watch task should see any changes to sass, js, or jekyll and pull those files in on a page refresh. If a change isn't reflected, rebuild the server.

### Deploying the Documentation Website

Deploy to the documentation site via:
```shell
git remote add docsserver <youruseraccount>@test.fso.arizona.edu:repos/bootstrap.git
git push docsserver master
```

TODO. Set up a grunt task? (bootstrap did it through one, currently commented out)

### Setting up the documentation server

NOTE: This process doesn't currently work. In the meantime, clone the repo on the server, build it using `bundle exec jekyll build`, and use `sudo rsync -av /<path-to-repo>/_gh_pages/ /var/www/html/`. Nginx will then serve the content.

The documentation server need to be running Jekyll and Ruby. To make this process easy (as well as updating), use rvm to handle the installation.

Install Ruby:
```shell
curl -L https://get.rvm.io | bash -s stable # install rvm
source ~/.rvm/scripts/rvm                   # source rvm to use right now
rvm requirements                            # install any requirements
rvm install <version>                       # install the latest stable (v2.4.0 as of 2/9/17)
rvm use <version>                           # use the version you installed
ruby --version                              # double check what's running
```

Install the latest RubyGems and Jekyll:
```shell
rvm rubygems current                        # install the latest rubygems
gem install jekyll                          # install Jekyll (finally!) NOTE: don't use sudo since that bypasses rvm for some reason.
```

Prepare the server for pulling and deploying from gitlab:
```shell
sudo apt-get install git-core                        # install git core
cd /                                                 # switch to a new repo
sudo mkdir repos && cd repos
sudo mkdir bootstrap.git && cd bootstrap.git
sudo git init --bare                                 # initialize a bare repo. Very important!
```

Set up the script to run whenever an incoming push occurs:
```shell
cd hooks
sudo touch post-receive
sudo vi post-receive
```

Paste in the following:
```script
#!/bin/bash -l
GIT_REPO=$HOME/repos/bootstrap.git
TMP_GIT_CLONE=$HOME/tmp/git/bootstrap
PUBLIC_WWW=/var/www/bootstrap

git clone $GIT_REPO $TMP_GIT_CLONE
jekyll build --source $TMP_GIT_CLONE --destination $PUBLIC_WWW
rm -Rf $TMP_GIT_CLONE
exit
```

Now, give the script write permissions:
```shell
sudo chmod +x post-receive
```

Now you should be able to add this repo as a git remote and then push to it to start a build.

On your local machine:
```shell
git remote add docsserver <youruseraccount>@test.fso.arizona.edu:repos/bootstrap.git
git push docsserver master
```

Then, the script should run, deploying the site.