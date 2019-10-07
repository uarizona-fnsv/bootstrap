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

> **Don't forget to `npm run dist` before pushing!** This compiles and minifies all the CSS!

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
| npm run lint          | Lint the files with `eslint` |
| npm run release       | Create a release. See [releasing instructions](#releasing-a-new-version) |
