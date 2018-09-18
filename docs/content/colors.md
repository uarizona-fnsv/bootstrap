---
title: 'Colors'
description: 'Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.'
bootstrap-link: ''
colors: [
  { name: 'Primary Light', color: 'primary-light', hex: '#378dbd', alt: 'Oasis' },
  { name: 'Primary', color: 'primary', hex: '#1e5288', alt: 'Azurite' },
  { name: 'Primary Dark', color: 'primary-dark', hex: '#0c234b', alt: 'Arizona Blue' },
  { name: 'Accent', color: 'accent', hex: '#ab0520', alt: 'UA Red' },
  { name: 'Secondary', color: 'secondary', hex: '#9eabae', alt: 'n/a' },
  { name: 'Info', color: 'info', hex: '#007d84', alt: 'River' },
  { name: 'Success', color: 'success', hex: '#70b865', alt: 'Leaf' },
  { name: 'Warning', color: 'warning', hex: '#f19e1f', alt: 'Sand' },
  { name: 'Danger', color: 'danger', hex: '#ef4056', alt: 'Bloom' },
  { name: 'Light', color: 'light', hex: '#f8f9fa', alt: 'n/a' },
  { name: 'Dark', color: 'dark', hex: '#212529', alt: 'n/a' }
]
---

The colors available are shown below, with their purpose indicated by their name, which are common across our components. As such, not all bootstrap components include these colors.

These colors are a streamlined subset of the UA Branding colors, which are all still available for use and documented [here](./ua-branding.html).

<div class="mb-4 d-flex flex-row flex-wrap justify-content-center">
  <div v-for="color in $page.frontmatter.colors" :key="color.color"
       class="m-2 p-2 d-flex flex-column justify-content-center"
       :class="['bg-' + color.color, color.color == 'light' ? 'text-dark' : 'text-light' ]"
       style="width:200px; height:200px; text-align:center;">
    <p class="h5">{{ color.name }}</p>
    <p class="small">{{ color.alt }}</p>
    <p>{{ color.hex }}</p>
  </div>
</div>

`Primary Light`, `Primary Dark`, and `Accent` should be used sparingly and only when 'Primary' has already been used and differentiation is needed. This often occurs in a toolbar with many buttons. In some occasions, `Accent` can replace `Primary`, especially if on a smaller area, such as a nested component with it's own independant functionality, or a modal/dialog.

`Dark` and `Light` should also be used sparingly, and in instances where neutrality is needed. Keep in mind that each can be difficult to see depending on the background they are set in.

## Text Color

Be sure to keep in mind what is most useful/appropriate in a given situation. For more information on this, see above. Note that several of these colors are duplicates, for more info on this, also see above.

<p v-for="color in $page.frontmatter.colors" :key="color.color"
   :class="['text-' + color.color, { 'bg-dark': color.color == 'light'}]">
  .text-{{ color.color }}
</p>
<p class="text-body">.text-body</p>
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
<p class="text-black-50">.text-black-50</p>
<p class="text-white-50 bg-dark">.text-white-50</p>

## Background color

Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities **do not set `color`**, so in some cases you'll want to use `.text-*` utilities.

Be sure to keep in mind what is most useful/appropriate in a given situation. For more information on this, see above. Note that several of these colors are duplicates, for more info on this, also see above.

<Example>
  <div v-for="color in $page.frontmatter.colors" :key="color.color"
       class="p-3 mb-2"
       :class="['bg-' + color.color, color.color == 'light' ? 'text-dark' : 'text-light']">
    .bg-{{ color.color }}
  </div>
  <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
  <div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
</Example>

::: warning Dealing with specificity
Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` with the class.
:::
