#!/usr/bin/env node

/**
 * A script to prepare a release of FSO-Bootstrap by changing version numbers
 */

const replace = require('replace-in-file');
const packageJSON = require('../package.json');

function main (args) {
  if (args.length !== 1) {
    console.error('USAGE: release old_version new_version');
    console.error('Got arguments:', args);
    process.exit(1);
  }

  const newVersion = args[0];

  const oldVersion = packageJSON.version;

  const replaceOptions = {
    files: [
      './package.json',
      './scss/fso-bootstrap.scss',
      './scss/fso-font-awesome.scss',
      './scss/ua-brand-icons.scss'
    ],
    from: oldVersion,
    to: newVersion
  };

  replace(replaceOptions)
    .then(changes => {
      console.log('Modified files:', changes.join(', '));
    })
    .catch(error => {
      console.error('Error occurred:', error);
    });
}

main(process.argv.slice(2));
