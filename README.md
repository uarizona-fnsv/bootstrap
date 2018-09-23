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
@import "<path-to node_modules>/bootstrap/dist/css/bootstrap.css";
// Import as scss (preferred)
@import "<path-to node_modules>/bootstrap/scss/fso-bootstrap";
```

```html
<link rel="stylesheet" src="<path-to node_modules>/bootstrap/dist/css/bootstrap.min.css">
```

If you need to use javascript functionality, you'll also need to import it _after_ importing it's jquery and tether dependencies, like so:

```html
<script src="<path-to node_modules>/bootstrap/dist/js/bootstrap.min.js">
```

#### Javascript

While FSO Bootstrap does not modify the javascript of bootstrap at all, we include the minified js dist for simplicity.

```js
// Assuming you've already imported jquery and tether
import '<path-to node_modules>/bootstrap/dist/js/bootstrap.min.js';
```

If you need/want to use individual js files, you'll need to [install Bootstrap](http://getbootstrap.com/docs/4.1/getting-started/download/#npm) alongside FSO Bootstrap since we do not include them. FSO Bootstrap is configured so that npm will warn you if it is incompatible with the version of Bootstrap you install alongside it. While this won't necessarily break your app, you may want to ensure you are using the same version that FSO Bootstrap is currently using.

#### Optional imports

If you need to use Font Awesome (i.e. you can't use font awesome via it's native js library):

```scss
// Import as css
@import "<path-to node_modules>/bootstrap/dist/css/fso-font-awesome.css";
// Import as scss (preferred)
@import "<path-to node_modules>/bootstrap/scss/fso-font-awesome";
```

```html
<link rel="stylesheet" src="<path-to node_modules>/bootstrap/dist/css/fso-font-awesome.min.css">
```

If you need to use UA Branding Icons:

```scss
// Import as css
@import "<path-to node_modules>/bootstrap/dist/css/ua-brand-icons.css";
// Import as scss (preferred)
@import "<path-to node_modules>/bootstrap/scss/ua-brand-icons";
```

```html
<link rel="stylesheet" src="<path-to node_modules>/bootstrap/dist/css/ua-brand-icons.min.css">
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

### Deployment

To compile changes, run `npm run dist`. This will build all the css and copy files to where they are supposed to be.

TODO: Deploy instructions for cutting a new version

Gitlab CI will take care of the deployment of the docs site and the CDN.
