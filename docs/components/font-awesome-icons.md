---
title: 'Font Awesome Icons'
description: 'Font Awesome is an easy-to-use, full-featured, library of over 1300 icons.'
bootstrapLink: ''
---

::: warning This is not recommended
Only use this opt-in component if using Font Awesome's [javascript approach](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=svg-with-js) is not an option. 
:::

Font Awesome is included as a part of FSO-Bootstrap for a few reasons:
1. To provide a quick way to import Font Awesome.
1. To provide Font Awesome to applications that were built on FSO-Bootstrap 1.x, which included Font Awesome by default to provide a buffer on switching to more recommended implementations.
1. To provide Font Awesome to older apps that are being touched up but not migrated to Vue.js for the time being and will continue to use AngularJS, jQuery, or plain JS/Django Templates for the time being.

Font Awesome is opt-in, meaning that it is compiled to a seperate css file that must be imported in addition to the main library styles.

To import, use:

```html
<link src="...path-to-node-modules.../bootstrap/dist/css/fso-font-awesome.min.css">
```

or, via `scss`:

```scss
@import "...path-to-node-modules.../bootstrap/scss/fso-font-awesome";
```

This is opt-in because Font Awesome is a large library, and importing it adds 1+ mb of imports to your application. All available CSS options are available for use, including all three font types: `regular`, `solid`, and `brands`. Keep in mind that not all icons in the `regular` font type are available to the free version of font awesome used here.

It is recommended that you instead use the [javascript aapproach](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=svg-with-js) documented by Font Awesome, along with the requisite js library for the applications framework. By using the javascript method, you will reduce your compiled library size to fractions of a megabyte.

## Usage

See [Font Awesome's usage documentation](https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use) for more information.

Basic usage is as follows:

<div>
  <i class="fas fa-stroopwafel"></i>
  <i class="fas fa-stroopwafel"></i>
  <span class="fas fa-stroopwafel"></span>
</div>

```html
<i class="fas fa-stroopwafel"></i> <!-- this icon's 1) style prefix == fas and 2) icon name == stroopwafel -->
<i class="fas fa-stroopwafel"></i> <!-- using an <i> element to reference the icon -->
<span class="fas fa-stroopwafel"></span> <!-- using a <span> element to reference the icon -->
```

<style lang="scss">
  /* Fix relative pathing of fonts for this import inside of docs */
  $fa-font-path: '../../fonts' !default;
  @import "../../scss/fso-font-awesome.scss";
</style>
