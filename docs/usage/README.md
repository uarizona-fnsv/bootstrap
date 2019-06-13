---
title: 'Usage'
description: 'Get started with FSO Bootstrap'
---

FSO Bootstrap can be installed via CDN or NPM. The NPM is recommended in most instances.

## CDN

When working outside of a node application, our CDN deploy can be used to import bootstrap. This will install the latest version that is considered production (i.e., the `master` branch).
```html
<link rel="stylesheet" src="https://assets.cdn.fso.arizona.edu/fso-bootstrap/bootstrap.css">
```
### Upcoming features
To test out upcoming feature (i.e. what is currently on the `develop` branch) you can install the `@next` folder:
```html
<link rel="stylesheet" src="https://assets.cdn.fso.arizona.edu/fso-bootstrap/@next/bootstrap.css">
```
### Specific Versions
If you need a specific version, or want to lock it down for manual checking, you can use a specific version:
```html
<link rel="stylesheet" src="https://assets.cdn.fso.arizona.edu/fso-bootstrap/x.x.x/bootstrap.css">
```

The version will map to the release tag in Gitlab.

## Node Package Manager (npm)
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
@import "<path-to node_modules>/fso-bootstrap/dist/bootstrap.css";
// Import as scss (preferred)
@import "<path-to node_modules>/fso-bootstrap/scss/fso-bootstrap";
```

```html
<link rel="stylesheet" src="<path-to node_modules>/fso-bootstrap/dist/bootstrap.min.css">
```

::: tip
To import as scss, you'll need to also install bootstrap via npm (`npm install --save-dev bootstrap`). You may want to make sure it is the same version used by FSO Bootstrap for improved compatibility. `npm` should warn you if the version is incompabile.
:::

## Installing from Gitlab
You should install from npm whenever possible. If you need to install a specific branch for testing, you can do so via:
```shell
npm install --save-dev git+https://git@gitlab.fso.arizona.edu/FAST/fso-bootstrap.git
```

::: warning
FSO Bootstrap does not include Bootstrap's JS. If you need to use you'll need to [install Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/download/#npm) alongside FSO Bootstrap since we do not include them, or use the js assets via bootstrap's CDN. FSO Bootstrap is configured so that npm will warn you if it is incompatible with the version of Bootstrap you install alongside it. While this won't necessarily break your app, you may want to ensure you are using the same version that FSO Bootstrap is currently using.
:::

## Optional imports

FSO Bootstrap keeps several things out of the normal import since they can be incredibly expensive for the pages loading time if not needed.

::: tip
These optional imports are only available with the npm installation, _not_ from the CDN.
:::

#### Font Awesome

If you need to use Font Awesome (i.e. you can't use font awesome via it's native js library):

```scss
// Import as css
@import "<path-to node_modules>/fso-bootstrap/dist/fso-font-awesome.css";
```

```html
<link rel="stylesheet" src="<path-to node_modules>/fso-bootstrap/dist/fso-font-awesome.min.css">
```

*Note:* If you want to import the font awesome via scss, you'll need to install Font Awesome as well (`npm install --save-dev @fort-awesome/font-awesome-free`). Honestly at this point, deal with font awesome on your own and import via js or individual icons needed via scss.

#### UA Branding Icons

If you need to use UA Branding Icons:

```scss
// Import as css
@import "<path-to node_modules>/fso-bootstrap/dist/ua-brand-icons.css";
```

```html
<link rel="stylesheet" src="<path-to node_modules>/fso-bootstrap/dist/ua-brand-icons.min.css">
```
