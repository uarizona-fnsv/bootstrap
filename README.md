# FSO Bootstrap

FSO Bootstrap is a theme built on top of [Bootstrap](https://getbootstrap.com). We use UA branding colors and make some changes to bootstraps functionality to reflect UA branding. However, we make some of our own choices by default, but build in methods of using UA Branding choices when necessary.

*Note:* This is for FSO Bootstrap 1.x, which is based on the final release (and subsequent updates) of Bootstrap 4. For FSO Bootstrap 0.x, see [the v1 branch](https://gitlab.fso.arizona.edu/FAST/fso-bootstrap/tree/v4-alpha-based-backup) and it's [documentation]().

## Usage

### CDN

Coming Soon...

### NPM

To get started with FSO Bootstrap, you can install it from npm:

```shell
npm install --save-dev git+https://git@gitlab.fso.arizona.edu/FAST/fso-bootstrap.git
```

Then, use the assets:

```scss
// Import as css
@import "<path-to node_modules>/fso-bootstrap/dist/bootstrap.css";
// Import as scss (preferred)
@import "<path-to node_modules>/fso-bootstrap/scss/fso-bootstrap";
```

```html
<link rel="stylesheet" src="<path-to node_modules>/fso-bootstrap/dist/bootstrap.min.css">
```

*Note:* To import as scss, you'll need to also install bootstrap via npm (`npm install --save-dev bootstrap`).

#### Javascript

FSO Bootstrap does not include Bootstrap's JS. If you need to use you'll need to [install Bootstrap](http://getbootstrap.com/docs/4.1/getting-started/download/#npm) alongside FSO Bootstrap since we do not include them, or use the js assets via bootstrap's CDN. FSO Bootstrap is configured so that npm will warn you if it is incompatible with the version of Bootstrap you install alongside it. While this won't necessarily break your app, you may want to ensure you are using the same version that FSO Bootstrap is currently using.

#### Optional imports

If you need to use Font Awesome (i.e. you can't use font awesome via it's native js library):

```scss
// Import as css
@import "<path-to node_modules>/fso-bootstrap/dist/fso-font-awesome.css";
```

```html
<link rel="stylesheet" src="<path-to node_modules>/fso-bootstrap/dist/fso-font-awesome.min.css">
```

*Note:* If you want to import the font awesome via scss, you'll need to install Font Awesome as well (`npm install --save-dev @fort-awesome/font-awesome-free`). Honestly at this point, deal with font awesome on your own and import via js or individual icons needed via scss.

If you need to use UA Branding Icons:

```scss
// Import as css
@import "<path-to node_modules>/fso-bootstrap/dist/ua-brand-icons.css";
```

```html
<link rel="stylesheet" src="<path-to node_modules>/fso-bootstrap/dist/ua-brand-icons.min.css">
```

## Development

To get started with development, clone the project and install dependencies:

```shell
git clone git@gitlab.fso.arizona.edu:fast/fso-bootstrap.git
cd fso-bootstrap
npm install
```

### Theming

All of the magic of FSO Bootstrap happens in the `scss/` folder, which is where we import Bootstrap and override it's default variables (`scss/variables.scss`) and add/override other various functions, mixins, and components. Overriden/added-to files are stored in the `scss/changes/` folder for organization purposes, and any additional pages or changes should be made here with the same file names as found in bootstrap's `scss/` folder.

### Docs Site

Documentation is found in the `docs/` folder. To run the site locally, use `npm run docs:dev`.

Any changes to the theming should be verified using the docs site. If documentation changes are required, be sure to update the respective markdown file. These files are more or less copied from the bootstrap site, though with some changes for our `<example>` component and using VuePress instead of Jekyll.

If new bootstrap features are added, be sure to appropriately document them here. 

For more information on VuePress, see [it's documentation site](https://vuepress.vuejs.org).

### Releasing a new version

Releasing a new version is easy.

1. **Make sure you are up to date.** Be sure to `git pull`, commit any final changes, and perform a rebase on develop to make sure you are 100% ready.
1. **Determine the Version Number.** We use the semver of `major.minor.patch`. Be sure to see what the previous version is in the `package.json` and determine what makes sense.
1. **Do it! [_lightsaber sounds_]** Run `npm run release -- <version>`, with `<version>` being the next version number. This does the following for you:
    - Run `npm run change-version` to modify all our assets with the correct version number for releasing.
    - Run `npm run dist` to compile all the assets with the new versions. Make sure this succeeds and places the appropriate files in the `dist/` folder
    - Tag the release in git

Gitlab CI will take care of the docs site, CDN, and nexus repository deploys when the pipeline succeeds.

## Documentation Site

The documentation site is deployed via Gitlab CI to an AWS S3 bucket. Each branch has a folder in the bucket, which is cleaned up manually. The `master/` folder is mapped to our docs site url, but otherwise you can look at the [Gitlab CI environments page](https://gitlab.fso.arizona.edu/FAST/fso-bootstrap/environments) to see a direct link for each branch.

### Initial configuration of the docs site

If for some reason the docs site bucket has been destroyed, re-creating it is easy. Unless the IAM user and programatic access user account was deleted, you shouldn't need to recreate it.

1. Create an S3 bucket with public read access and enable "Static Website Hosting". Set the "Index document" field to `index.html`. The bucket can be named anything, however, we've generally been using the `fast-docs-<name>` naming scheme for sanity.
2. Open the S3 bucket's Permisions pane and select `Bucket Policy`. Paste in the following policy, changing as appropriate. (AWS will complain about granting public access; disregard it since the buckets structure is public anyway)
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "s3:GetObject"
            ],
            "Effect": "Allow",
            "Resource": "arn:aws:s3:::fast-docs-bootstrap/*",
            "Principal": "*"
        }
    ]
}
``` 
3. Create an IAM policy for gitlab to use with the following configuration. A good naming convention (again, for sanity) is `gitlab-ci_<bucket-name>`, and give it a description saying that it's for gitlab ci to work with s3 to deploy documentation sites.
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:PutObject",
                "s3:DeleteObject"
            ],
            "Resource": "arn:aws:s3:::fast-docs-bootstrap/*"
        },
        {
            "Sid": "VisualEditor1",
            "Effect": "Allow",
            "Action": "s3:ListObjects",
            "Resource": "*"
        }
    ]
}
```
4. Attach the policy to the IAM User `gitlab-ci-s3-deploy`. Click on "Attach existing policies directly" and give it the IAM policy listed above. 

<small>If the user doesn't already exist, make one with the user name `gitlab-ci-s3-deploy`, grant it "Programmatic access". Be sure to copy the Access Key ID and Secret access key down and place them in Stache. If you don't know what that is, ask!</small>

5. Set up Gitlab CI's enviornment variables. In the project, go to Settings -> CI/CD -> Variables and add the following items (you'll need to get them from Stache):
    - `AWS_ACCESS_KEY_ID`: the Access Key ID
    - `AWS_SECRET_ACCESS_KEY`: the secret access key
Do not protect them since we want all branches to use the keys when deploying to s3.

Everything should be good to go now. Once you push a branch or merge into `develop` or `master`, our static site should be deployed to s3. If this is a new deployment, be sure to wire up the docs site url (it should be `bootstrap.docs.fso.arizona.edu` to the bucket's master branch folder).
