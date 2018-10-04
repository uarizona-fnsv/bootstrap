#!/usr/bin/env bash

# This script automates releasing a new version of FSO Bootstrap, heavily based upon
# https://github.com/twbs/bootstrap's release script.

# Setup some fun colors!
red=$'\e[1;31m'
green=$'\e[1;32m'
magenta=$'\e[1;35m'
cyan=$'\e[1;36m'
end=$'\e[0m'

# Get the current version from package.json
current_version=$(node -p "require('../package.json').version")

if [[ $# -lt 1 ]]; then
  printf "\n%s⚠️  Shipping aborted. You must specify a version.\n%s" $red $end
  exit 1
fi

# Update version number
printf "\n%s=======================================================%s" $cyan $end
printf "\n%sUpdating version number...%s" $magenta $end
printf "\n%s=======================================================\n%s" $cyan $end
npm run change-version "$current_version" "$1"
