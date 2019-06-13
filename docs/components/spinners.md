---
title: 'Spinners'
description: 'Indicate the loading state of a component or page with Bootstrap spinners, built entirely with HTML, CSS, and no JavaScript.'
buttons: 
- label: Bootstrap Docs
  icon: fas fa-book   
  type: info   
  link: 'https://getbootstrap.com/docs/4.3/components/spinners/'
---

## About

Bootstrap "spinners" can be used to show the loading state in your projects. They're built only with HTML and CSS, meaning you don't need any JavaScript to create them. You will, however, need some custom JavaScript to toggle their visibility. Their appearance, alignment, and sizing can be easily customized with our amazing utility classes.

For accessibility purposes, each loader here includes `role="status"` and a nested `<span class="sr-only">Loading...</span>`.

## Border spinner

Use the border spinners for a lightweight loading indicator.

<Example>
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</Example>

### Colors

The border spinner uses `currentColor` for its `border-color`, meaning you can customize the color with [text color utilities][color]. You can use any of our text color utilities on the standard spinner.

<Example>
  <div class="spinner-border text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner-border text-secondary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner-border text-info" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</Example>


::: tip
**Why not use `border-color` utilities?** Each border spinner specifies a `transparent` border for at least one side, so `.border-{color}` utilities would override that.
:::

## Growing spinner

If you don't fancy a border spinner, switch to the grow spinner. While it doesn't technically spin, it does repeatedly grow!

<Example>
  <div class="spinner-grow" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</Example>

Once again, this spinner is built with `currentColor`, so you can easily change its appearance with [text color utilities][color]. Here it is in blue, along with the supported variants.

<Example>
  <div class="spinner-grow text-primary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner-grow text-secondary" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner-grow text-info" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</Example>


## Alignment

Spinners in Bootstrap are built with `rem`s, `currentColor`, and `display: inline-flex`. This means they can easily be resized, recolored, and quickly aligned.

### Margin

Use [margin utilities][margin] like `.m-5` for easy spacing.

<Example>
  <div class="spinner-border m-5" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</Example>


### Placement

Use [flexbox utilities][flex], [float utilities][float], or [text alignment][text] utilities to place spinners exactly where you need them in any situation.

#### Flex

<Example>
  <div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</Example>


<Example>
  <div class="d-flex align-items-center">
    <strong>Loading...</strong>
    <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
  </div>
</Example>


#### Floats

<Example>
  <div class="clearfix">
    <div class="spinner-border float-right" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</Example>


#### Text align

<Example>
  <div class="text-center">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</Example>


## Size

Add `.spinner-border-sm` and `.spinner-grow-sm` to make a smaller spinner that can quickly be used within other components.

<Example>
  <div class="spinner-border spinner-border-sm" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner-grow spinner-grow-sm" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</Example>


Or, use custom CSS or inline styles to change the dimensions as needed.

<Example>
  <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
    <span class="sr-only">Loading...</span>
  </div>
  <div class="spinner-grow" style="width: 3rem; height: 3rem;" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</Example>


## Buttons

Use spinners within buttons to indicate an action is currently processing or taking place. You may also swap the text out of the spinner element and utilize button text as needed.

<Example>
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <span class="sr-only">Loading...</span>
  </button>
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>
</Example>


<Example>
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    <span class="sr-only">Loading...</span>
  </button>
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>
</Example>



<!-- [color]:   {{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/colors/
[display]: {{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/display/
[flex]:    {{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/
[float]:   {{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/float/
[margin]:  {{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/
[sizing]:  {{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/sizing/
[text]:    {{ site.baseurl }}/docs/{{ site.docs_version }}/content/typography/ -->
