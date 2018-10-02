---
title: 'UA Brand Icons'
description: 'An icon set from the UA Branding team'
uaIcons: ['uaccess', 'checklist', 'spring-fling', 'tour', 'athletics', 'feedback', 'alumni', 'document', 'az-index', 'directory', 'weather', 'video', 'campus-map', 'news', 'foursquare', 'pinterest', 'youtube', 'facebook', 'mobile', 'googleplus', 'instagram', 'linkedin', 'twitter', 'rss', 'bookmark', 'unbookmark', 'search', 'checkmark', 'x', 'hamburger', 'minus', 'plus', 'email', 'print', 'link', 'refresh', 'upload', 'download', 'minimize', 'maximize', 'fast-forward', 'stop', 'pause', 'rewind', 'down-point', 'up-right-point', 'right-point', 'down-right-point', 'up-point', 'left-point', 'down-left-point', 'up-left-point', 'bottom-corner', 'top-right-corner', 'right-corner', 'bottom-right-corner', 'top-corner', 'left-corner', 'bottom-left-corner', 'top-left-corner', 'down-arrow', 'up-right-arrow', 'right-arrow', 'down-right-arrow', 'up-arrow', 'left-arrow', 'down-left-arrow', 'up-left-arrow']
---





::: warning Special Use Case
Only use this opt-in component if necessary. Font Awesome serves as our primary icon set.
:::

UA Brand Icons provide university-focused icons. In general, these icons should be avoided unless a specific need comes about. Generally, this means needing a representative icon, such as `uaccess` or requiring the various arrow elements. These icons are considered opt-in, meaning they must be imported seperately. Since Font Awesome is our primary icon set, never use any icon from the UA Brand Icons set that already exists in Font Awesome.

To import, use:

```html
<link src="...path-to-node-modules.../bootstrap/dist/css/ua-brand-icons.min.css">
```

or, via `scss`:

```scss
@import "...path-to-node-modules.../bootstrap/scss/ua-brand-icons";
```

## Usage

All icons can be used with the `i` or `span` element and use the `.ua` class, followed by the icon (`.ua-` + name).

```html
<i class="ua ua-alumni">
```

## Icons

Below is a listing of all icons included for convenience.

<div class="d-flex flex-row flex-wrap justify-content-center">
  <div v-for="icon in $page.frontmatter.uaIcons" :key="icon"
      class="bg-coolgray m-2 d-flex flex-column justify-content-center align-items-center" 
      style="width: 200px; height: 200px;">
    <i :class="'ua ua-' + icon" style="font-size:5em;"/>
    <p class="mt-2">.ua-{{ icon }}</p>
  </div>
</div>

<style lang="scss">
  $ua-font-path:  "../../fonts/" !default;
  @import "../../scss/ua-brand-icons.scss";
</style>
