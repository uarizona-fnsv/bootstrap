# FSO Bootstrap

FSO Bootstrap is a theme built on top of [Bootstrap](https://getbootstrap.com). We use UA branding colors and make some changes to bootstraps functionality to reflect UA branding. However, we make some of our own choices by default, but build in methods of using UA Branding choices when necessary.

*Note:* This is for FSO Bootstrap 1.x, which is based on the final release (and subsequent updates) of Bootstrap 4. For FSO Bootstrap 0.x, see [the v1 branch](https://gitlab.fso.arizona.edu/FAST/fso-bootstrap/tree/v4-alpha-based-backup) and it's [documentation](http://fast-docs-fso-bootstrap-alpha.s3-website-us-west-2.amazonaws.com/).

## Usage

See [Usage Docuementation](./docs/usage/README.md).

## Development

To get started with development, clone the project and install dependencies:

```shell
git clone git@gitlab.fso.arizona.edu:fast/fso-bootstrap.git
cd fso-bootstrap
npm install
# start the dev server
npm run docs:dev
```

Then, you can use the npm commands to build, develop, and generate the plugin and documentation site. The commands are as follows:

| Command               | Description |
| --------------------- | :---------- |
| npm run dist          | Compile styles, this runs css linting, compilation, and minification and puts the results in `dist/` |
| npm run docs:dev      | Runs the documentation site's development server |
| npm run docs:build    | Geneate the SSR site for deployment |
| npm run lint          | Lint the files with `eslint` |
| npm run release       | Create a release. See [releasing instructions](#releasing-a-new-version) |

When developing anything in FSO Bootstrap, be sure to update the documentation under the `docs/` folder. Not every component or change has to be documented, but it's a good idea to document as much as possible, particularly if it is something usable by developers.

### Workflow

The main workflow behind development is as follows:
- Feature branches are used to add features (duh). As development is pushed up to it's branch on gitlab, a documentation site (for more information, see [here](#documentation-site)) is created so that you can view changes and share them if necessary.
- Once features are established, they are merged into `develop` via a merge request. At this point, the documentation site for `develop` is updated. See [testing your changes before release](#testing-your-changes-before-release) for more information on preparing for a release.
- When things are ready for a release, it's time to create a new feature branch (named whatever) and create a release, as described [here](#releasing-a-new-version). At this point, the package will also be available on Sonatype Nexus as `@fso/bootstrap@x.x.x` (x.x.x being the release made) for installing via npm, as well as under the `fso-bootstrap/x.x.x` folder on the CDN.
- Merge that commit and tag into `develop` via a merge request. This will update the docs site and CDN, though since you've already verified things with the previous commits, you should be good to move forward.
- If everything is good, it's time to merge that into `master` via a merge request. On merge, gitlab will deploy the documentation site to production (i.e. the `latest` folder on s3) and update the root level of the CDN to the released version.

### Testing your changes before release

After you have merged changes into develop and you are ready for a release, it's time to test things for a final time. You can go about this in a few ways:

1. **Use the `@next` tag in the cdn.** The CDN will have a `@next/` folder which can be used to test things. See the [instructions for installing from a cdn](./docs/usage/README.md#upcoming-features)
1. **Installing from a local folder.** If you have this repository on your computer and have the latest changes on a branch, you can test that branch via a local npm install. To do so, run `npm install . -g`, which will attempt to globally install this package and will point out any errors. Use `npm ls -g` to verify the install worked. You can then enter the node-repl (type `node` in the terminal) and try to import the package to see if it does what it's supposed to do. You can also try and install it in another respository on your computer which uses the package by calling `npm install ../path-to-this-project` in that repository. Just be sure to reset that repository back to it's previous state after you finish testing. 
1. **Installing from Gitlab.** You can also install from gitlab. See [instructions for installing from gitlab](.docs/usage/README.md#installing-from-gitlab). Be sure to reset the repository you install to back to it's previous state once you are finished testing.

### Releasing a new version

Releasing a new version is easy.

1. **Make a new feature branch and ensure you are up to date.** Before making a release, handle changes via other feature branches. When making a release, you should make a new feature branch *just to make this release* after having tested the current `develop` branch as discussed [above](#testing-your-changes-before-release).
1. **Update the changelog.** Many any changelog updates now.
1. **Determine the Version Number.** We use the semver of `major.minor.patch`. Be sure to see what the previous version is in the `package.json` and determine what makes sense. Don't change the version number yet, we'll do that later.
1. **Test the publish method.** Make sure you try out `npm publish --dry-run` to see what the published package will include. If there are files in the list you don't think should be published, update the whitelish in `package.json` to not include them, or add them to the `.gitignore` if it shouldn't upload to git either. Don't forget the `--dry-run` flag, or else you might upload a broken package.
1. **Do it! _lightsaber sounds_** Run `npm run release -- <version>`, with `<version>` being the next version number that you determined in step 2. This executes `/build/release.sh`, which does the following for you:
    - Run `npm run change-version` to modify all our assets with the correct version number for releasing.
    - Run `npm run dist` to compile all the assets with the new versions. Make sure this succeeds and places the appropriate files in the `dist/` folder
    - Deploy the release to our Sonatype Nexus instance (as long as you've configured everything properly, see [here](#deploying-to-sonatype-nexus))
    - Tag the release in git
1. Now, run `git push && git push --tags` to push the compiled code and the new tag to gitlab

Gitlab CI will take care of the docs site, CDN, and nexus repository deploys when the pipeline succeeds.
- the CDN is updated when a release is created and a tag is pushed to Gitlab
- Docs site is always updated whenever a deploy runs. See [below](#Documentation-site) for more information.

### Deploying to Sonatype Nexus
Sonatype nexus is our internal `npm` package respository. The `package.json` is already configured to use our repository for publishing, all you need to do is log in beforehand. Once you log in on your machine, the credentials should be stores in base64 in your global `.npmrc` config file.

To login, first have the systems team create credentials for you on our Sonatype Nexus server (`zealot.fso.arizona.edu`). Then, run the following command and use those credentials:

```shell
npm login --scope=@fso --registry=https://zealot.fso.arizona.edu/repository/npm-internal/ --always-auth
```

Now you should be ready to follow the rest of the release steps above.

*Note:* Once you've logged in on a machine once, you should be good to go unless your npm config is changed, since `npm login` stores an auth token in your `~/.npmrc` file, which is then sent every time you do anything with the npm repository.

*Gah! It failed!* Don't worry, just make sure you login or fix the issue, then run `npm publish --registry=https://zealot.fso.arizona.edu/repository/npm-internal/` again until it works.

## The Repository

### Development

All of the magic of FSO Bootstrap happens in the `scss/` folder, which is where we import Bootstrap and override it's default variables (`scss/variables.scss`) and add/override other various functions, mixins, and components. Overriden/added-to files are stored in the `scss/changes/` folder for organization purposes, and any additional pages or changes should be made here with the same file names as found in bootstrap's `scss/` folder.

### Docs

Documentation is found in the `docs/` folder. It is built with VuePress. To run the site locally, use `npm run docs:dev`.

Any changes to the theming should be verified using the docs site. If documentation changes are required, be sure to update the respective markdown file. These files are more or less copied from the bootstrap site, though with some changes for our `<example>` component and using VuePress instead of Jekyll.

If new bootstrap features are added, be sure to appropriately document them here. 

For more information on VuePress, see [it's documentation site](https://vuepress.vuejs.org).

## Documentation Site

The documentation site is deployed via Gitlab CI to an AWS S3 bucket. Each branch has a folder in the bucket, which is cleaned up manually. The `latest/` folder (deployed from `master`) is the default route, but otherwise you can look at the [Gitlab CI environments page](https://gitlab.fso.arizona.edu/FAST/fso-bootstrap/environments) to see a direct link for each branch.

In general, available options will be:
| Bucket Folder | Gitlab Branch | Example |
|:-------------:|:-------------:|:---------|
| `/` | `master` | |
| `versions/next/`   | `develop`| |
| `versions/{branchname}`| `{branchname}`| `3-update-styles` |
| `versions/x.x.x`   | tag | `1.1.1` |
All branches and tags will have a folder. Eventually, the site itself will include a switching functionality in it's navbar.

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

**What about the CDN deploy?** A similar process should be used for the `fastassets` cdn (or wherever the main CDN for these is), just follow the same process as above for that bucket. Again, this should only need to be recreated if something terrible happens to the bucket.
