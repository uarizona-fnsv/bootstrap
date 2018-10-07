---
title: 'Usage'
description: 'Get started with FSO Bootstrap'
---

FSO Bootstrap can be installed via CDN or NPM. The NPM is recommended in most instances.

## CDN

When working outside of a node application, our CDN deploy can be used to import bootstrap.

```html
<link rel="stylesheet" src="https://assets.cdn.fso.arizona.edu/fso-bootstrap/bootstrap.css">
```

If you need a specific version, or want to lock it down for manual checking, you can use a specific version.

```html
<link rel="stylesheet" src="https://assets.cdn.fso.arizona.edu/fso-bootstrap/v1.0.0/bootstrap.css">
```

The version will map to the release tag in Gitlab.

## Node.js (npm)

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

### Javascript

FSO Bootstrap does not include Bootstrap's JS. If you need to use you'll need to [install Bootstrap](http://getbootstrap.com/docs/4.1/getting-started/download/#npm) alongside FSO Bootstrap since we do not include them, or use the js assets via bootstrap's CDN. FSO Bootstrap is configured so that npm will warn you if it is incompatible with the version of Bootstrap you install alongside it. While this won't necessarily break your app, you may want to ensure you are using the same version that FSO Bootstrap is currently using.

### Optional imports

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
