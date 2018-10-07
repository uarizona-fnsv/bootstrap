---
title: 'Migrating'
description: 'Details on migrating from older versions on FSO Bootstrap'
---

# Migrating from 0.1.x

_i.e. versions of FSO Bootstrap based on Bootstrap v4 alpha's_

- Any definitions of `uared` are now `accent`
- There are no more `light-*` colors. `light-river` is now `coolgray`, and `light-sand` is now `warmgray`. All other light color variants have been removed.
- `cactus` has been replaced by `leaf`
- There is no longer a warning validation state on form field. Use danger instead.
- Font Awesome is no longer included by default. Font Awesome is included as an optional install for ease-of-migration, however, 
- no more uabranding by default

Please also refer to Bootstrap's guide to migrating to the [full release of Bootstrap 4](http://getbootstrap.com/docs/4.1/migration/).


# Migrating from UA Bootstrap

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

For any other changes, you'll want to refer to Bootstrap's list of migrations required for [moving from Bootstrap 3 to 4](http://getbootstrap.com/docs/4.1/migration/#summary).
