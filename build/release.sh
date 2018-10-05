#!/usr/bin/env bash

# This script automates releasing a new version of FSO Bootstrap, heavily based upon
# https://github.com/twbs/bootstrap's release script.

# Setup some fun colors!
red=$'\e[1;31m'
green=$'\e[1;32m'
magenta=$'\e[1;35m'
cyan=$'\e[1;36m'
end=$'\e[0m'


if [[ $# -lt 1 ]]; then
  printf "\n%s⚠️  Shipping aborted. You must specify a version.\n%s" $red $end
  exit 1
fi

# Update version number
printf "\n%s=======================================================%s" $cyan $end
printf "\n%sUpdating version number...%s" $magenta $end
printf "\n%s=======================================================\n%s" $cyan $end
npm run change-version "$1"

# Compile latest CSS and JS
printf "\n%s=======================================================%s" $cyan $end
printf "\n%sCompile latest CSS and JS...%s" $magenta $end
printf "\n%s=======================================================\n%s" $cyan $end
npm run dist

# Make a commit
printf "\n%s=======================================================%s" $cyan $end
printf "\n%sMake a commit for the release...%s" $magenta $end
printf "\n%s=======================================================\n%s" $cyan $end
git add .
git commit -m "Release $1"

# Tag the release in git
printf "\n%s=======================================================%s" $cyan $end
printf "\n%sTag the release...%s" $magenta $end
printf "\n%s=======================================================\n%s" $cyan $end
git tag "$1"

printf "\n%sSuccess!!!%s" $green $end
printf "\n%sExecute 'git push origin --tags' to push the release to gitlab %s" $green $end
printf "\n%sSee how Gitlab CI fares, and make a merge request against develop.%s" $green $end
