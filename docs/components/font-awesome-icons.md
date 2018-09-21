---
title: 'Font Awesome Icons'
description: 'Font Awesome is an easy-to-use, full-featured, library of over 1300 icons.'
bootstrapLink: ''
---

Font Awesome is included as a part of FSO-Bootstrap for two reasons:
1. To provide a quick way to import Font Awesome
1. To provide Font Awesome to applications that were built on FSO-Bootstrap 1.x, which included Font Awesome by default.

::: warning This is not recommended
Only use this opt-in component if using Font Awesome's [javascript approach](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=svg-with-js) is not an option. 
:::

Font Awesome is opt-in, meaning that it is compiled to a seperate css file that must be imported in addition to the main library styles.

To import, use:

```html
<link src="...path-to-node-modules.../bootstrap/dist/css/font-awesome.css">
```

or, via `scss`:

```scss
@import "...path-to-node-modules.../bootstrap/scss/font-awesome";
```

This is opt-in because Font Awesome is a large library, and importing it adds 1+ mb of imports to your application. To reduce import sizes further, only the "regular" and "brands" icons will be imported via this method.

It is recommended that you instead use the [javascript approach](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=svg-with-js) documented by Font Awesome, along with the requisite js library for the applications framework. By using the javascript method, you will reduce your compiled library size to fractions of a megabyte.

## Usage

See [Font Awesome's usage documentation](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) for more information.

Basic usage is as follows:

```html
<i class="fas fa-stroopwafel"></i> <!-- this icon's 1) style prefix == fas and 2) icon name == stroopwafel -->
<i class="fas fa-stroopwafel"></i> <!-- using an <i> element to reference the icon -->
<span class="fas fa-stroopwafel"></span> <!-- using a <span> element to reference the icon -->
```
