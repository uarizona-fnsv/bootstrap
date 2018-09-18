---
title: 'Images'
description: 'Documentation and examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them—all via classes.'
bootstrap-link: ''
---

## Responsive images

Images in Bootstrap are made responsive with `.img-fluid`. `max-width: 100%;` and `height: auto;` are applied to the image so that it scales with the parent element.

<Example :show-code="false">
  <img v-holder="'img=100px250'" class="img-fluid" alt="Generic responsive image">
</Example>

```html
<img src="..." class="img-fluid" alt="Responsive image">
```

::: warning SVG images and IE 10
In Internet Explorer 10, SVG images with `.img-fluid` are disproportionately sized. To fix this, add `width: 100% \9;` where necessary. This fix improperly sizes other image formats, so Bootstrap doesn't apply it automatically.
:::

## Image thumbnails

In addition to our [border-radius utilities](), you can use `.img-thumbnail` to give an image a rounded 1px border appearance.

<Example :show-code="false">
  <img v-holder="'img=200x200'" class="img-thumbnail" alt="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera">
</Example>

```html
<img src="..." alt="..." class="img-thumbnail">
```

## Aligning images

Align images with the [helper float classes]() or [text alignment classes](). `block`-level images can be centered using [the `.mx-auto` margin utility class]().

<Example :show-code="false" style="display: flex">
  <img v-holder="'img=200x200'" class="rounded float-left" alt="A generic square placeholder image with rounded corners">
  <img v-holder="'img=200x200'" class="rounded float-right" alt="A generic square placeholder image with rounded corners">
</Example>

```html
<img src="..." class="rounded float-left" alt="...">
<img src="..." class="rounded float-right" alt="...">
```

<br>

<Example :show-code="false">
  <img v-holder="'img=200x200'" class="rounded mx-auto d-block" alt="A generic square placeholder image with rounded corners">
</Example>

```html
<img src="..." class="rounded mx-auto d-block" alt="...">
```

<br>

<Example :show-code="false">
  <div class="text-center">
    <img v-holder="'img=200x200'" class="rounded" alt="A generic square placeholder image with rounded corners">
  </div>
</Example>

```html
<div class="text-center">
  <img src="..." class="rounded" alt="...">
</div>
```

## Picture

If you are using the `<picture>` element to specify multiple `<source>` elements for a specific `<img>`, make sure to add the `.img-*` classes to the `<img>` and not to the `<picture>` tag.

```html
​<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="...">
</picture>
```
