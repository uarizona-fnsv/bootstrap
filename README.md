# FSO Bootstrap

FSO Bootstrap is a theme built for [Bootstrap 4](https://getbootstrap.com). Refer to their documentation for most usage information.

> **Version Note
> This is for FSO Bootstrap 1.x, which is based on the stable release of Bootstrap 4. For FSO Bootstrap 0.x, _which was a complete fork of Bootstrap 4 alpha,_ see [the v4-alpha branch](https://gitlab.fso.arizona.edu/FAST/fso-bootstrap/tree/v4-alpha-based-backup) and it's [documentation](http://fast-docs-fso-bootstrap-alpha.s3-website-us-west-2.amazonaws.com/).

Refer to [colors.html](/colors.html) for the theme's color scheme.

## Installation

FSO Bootstrap can be installed via CDN or NPM. The NPM is recommended in most instances.

### CDN Install

When working outside of a node application, our CDN deploy can be used to import bootstrap. This will install the latest version that is considered production (i.e., the `master` branch).

```html
<link rel="stylesheet" src="https://assets.cdn.fso.arizona.edu/fso-bootstrap/bootstrap.css">
```

#### Upcoming Features

To test out upcoming feature (i.e. what is currently on the `develop` branch) you can install the `@next` folder:

```html
<link rel="stylesheet" src="https://assets.cdn.fso.arizona.edu/fso-bootstrap/@next/bootstrap.css">
```

#### Specific Versions

If you need a specific version, or want to lock it down for manual checking, you can use a specific version:

```html
<link rel="stylesheet" src="https://assets.cdn.fso.arizona.edu/fso-bootstrap/x.x.x/bootstrap.css">
```

The version will map to the release tag in Gitlab.

### npm Install

We use Sonatype Nexus to host our internal npm packages at https://zealot.fso.arizona.edu. To install packages from there, you must configure npm to use that repository for the `@fso` scope. To do so, run the following in the root folder of your project:

```shell
npm config set @fso:registry https://zealot.fso.arizona.edu/repository/npm-internal
```

This will add a `.npmrc` file which tells npm to go to our Sonatype Nexus server for packages with the `@fso` scope.

Most of our projects that use npm packages we've created will already be setup to use Sonatype Nexus, so you can refer to other code repositories for specific setup information as well.

To install from npm, run:

```shell
npm install @fso/bootstrap
```

You can install a specific version by adding a version tag:

```shell
npm install @fso/bootstrap@x.x.x
```

Then, use the assets:

```scss
// Import as css
@import "<path-to node_modules>/@fso/bootstrap/dist/bootstrap.css";
// Import as scss (preferred)
@import "<path-to node_modules>/@fso/bootstrap/scss/fso-bootstrap";
```

```html
<link rel="stylesheet" src="<path-to node_modules>/@fso/bootstrap/dist/bootstrap.min.css">
```

> **Importing SCSS**
> To import as scss, you'll need to also install bootstrap via npm (`npm install --save-dev bootstrap`). You may want to make sure it is the same version used by FSO Bootstrap for improved compatibility. `npm` should warn you if the version is incompabile.

### Gitlab Install

You should install from npm whenever possible. If you need to install a specific branch for testing, you can do so via:

```shell
npm install --save-dev git+https://git@gitlab.fso.arizona.edu/FAST/fso-bootstrap.git
```

> **JavaScript Warning**
FSO Bootstrap does not include Bootstrap's JS. If you need to use you'll need to [install Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/download/#npm) alongside FSO Bootstrap since we do not include them, or use the js assets via bootstrap's CDN. Ensure you are using the same version that FSO Bootstrap is currently using.

## Usage

FSO Bootstrap is just a theme of Bootstrap 4, and you can refer to [their documentation.](https://getbootstrap.com/)

The theme's colors and and their usage are documented in [colors.html](/colors.html)

There are a couple additional, optional components described below.

_These optional imports are only available with the npm installation, **not** from the CDN._

FSO Bootstrap keeps several things out of the normal import since they can be incredibly expensive for the pages loading time if not needed.

### Font Awesome Icons

> **Not Recommended**
> Only use this opt-in component if using Font Awesome's [javascript approach](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=svg-with-js) is not an option. It will add 1MB+ to your pages' sizes.
> Yes, we went out of our way to add something we don't even recommend using..

To import, use:

```html
<link src="...path-to-node-modules.../bootstrap/dist/css/fso-font-awesome.min.css">
```

or, via `scss`:

```scss
@import "...path-to-node-modules.../bootstrap/scss/fso-font-awesome";
```

All available CSS options are available for use, including all three font types: `regular`, `solid`, and `brands`. Only the free icons are available.

See [Font Awesome's documentation](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) for usage information.

### UA Branding Icons

UA Brand Icons provide university-focused icons. In general, these icons should be avoided unless a specific need comes about. Generally, this means needing a representative icon, such as `uaccess` or requiring the various arrow elements. Font Awesome serves as our primary icon set.

To import, use:

```html
<link src="...path-to-node-modules.../bootstrap/dist/css/ua-brand-icons.min.css">
```

or, via `scss`:

```scss
@import "...path-to-node-modules.../bootstrap/scss/ua-brand-icons";
```

All icons can be used with the `i` or `span` element and use the `.ua` class, followed by the icon (`.ua-` + name).

```html
<i class="ua ua-alumni">
```

The available icons are listed [here.](http://uadigital.arizona.edu/ua-bootstrap/components.html#ua-brand-icons)

## Migrating To FSO Bootstrap

### From 0.1.x

That is, versions of FSO Bootstrap based on Bootstrap v4 alphas.

- Any definitions of `uared` are now `accent`
- There are no more `light-*` colors. `light-river` is now `coolgray`, and `light-sand` is now `warmgray`. All other light color variants have been removed.
- `cactus` has been replaced by `leaf`
- There is no longer a warning validation state on form field. Use danger instead.
- Font Awesome is no longer included by default. Font Awesome is included as an optional install for ease-of-migration, however, 
- no more uabranding by default

Please also refer to Bootstrap's guide to migrating to the [full release of Bootstrap 4](https://getbootstrap.com/docs/4.3/migration/).

### From UA Bootstrap

In general, a migration from UA Bootstrap is very involved.

For UA specific-styling and color changes, refer to our documentation for colors, buttons, etc. Note that there are several components that UA Bootstrap has that we do not natively include, however, in most instances they can be easily re-created. Suggestions are listed below:

- **Background Wrappers**: This can be acheived by applying a custom background via css to a [Jumbotron](../components/jumbotron.md). Simply copy the image to your applications assets directory and, via css:

  ```css
  #some-jumbotron {
    background:
  }
  ```

- **Panel**: Use a card
- **Well**: Use a card
- **Callout**: Use an alert or card

For any other changes, you'll want to refer to Bootstrap's list of migrations required for [moving from Bootstrap 3 to 4](https://getbootstrap.com/docs/4.3/migration/#summary).

## Development

All of the magic of FSO Bootstrap happens in the `scss/` folder, which is where we import Bootstrap and override it's default variables (`scss/variables.scss`) and add/override other various functions, mixins, and components. Overriden/added-to files are stored in the `scss/changes/` folder for organization purposes, and any additional pages or changes should be made here with the same file names as found in bootstrap's `scss/` folder.

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
2. **Installing from a local folder.** If you have this repository on your computer and have the latest changes on a branch, you can test that branch via a local npm install. To do so, run `npm install . -g`, which will attempt to globally install this package and will point out any errors. Use `npm ls -g` to verify the install worked. You can then enter the node-repl (type `node` in the terminal) and try to import the package to see if it does what it's supposed to do. You can also try and install it in another respository on your computer which uses the package by calling `npm install ../path-to-this-project` in that repository. Just be sure to reset that repository back to it's previous state after you finish testing. 
3. **Installing from Gitlab.** You can also install from gitlab. See [instructions for installing from gitlab](.docs/usage/README.md#installing-from-gitlab). Be sure to reset the repository you install to back to it's previous state once you are finished testing.

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
