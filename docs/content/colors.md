---
colors: ['primary', 'primary-light', 'primary-dark', 'accent', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark']
---

# Colors

<p class="lead">Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.</p>

The colors available are shown below, with their purpose indicated by their name, which are common across our components. Colors marked with an asterisk (*) should be used sparingly and only when 'Primary' has already been used and differentiation is needed. As such, not all bootstrap components include these colors.

These colors are a streamlined subset of the UA Branding colors, which are all still available for use and documented [here](./ua-branding.html).

Primary Light*

Primary

Primary Dark*

Accent*

Secondary

Info

Success

Warning

Danger

Light

Dark

## Text Color

Be sure to keep in mind what is most useful/appropriate in a given situation. For more information on this, see above. Note that several of these colors are duplicates, for more info on this, also see above.

<p v-for="color in $page.frontmatter.colors" :key="color"
   :class="['text-' + color, { 'bg-dark': color == 'light'}]">
  .text-{{ color }}
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
  <div v-for="color in $page.frontmatter.colors" :key="color"
       class="p-3 mb-2"
       :class="['bg-' + color, color == 'light' || color == 'warning' ? 'text-dark' : 'text-light']">
    .bg-{{ color }}
  </div>
  <div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
  <div class="p-3 mb-2 bg-transparent text-dark">.bg-transparent</div>
</Example>

## Background gradient

When `$enable-gradients` is set to true, you'll be able to use `.bg-gradient-` utility classes. **By default, `$enable-gradients` is disabled and the example below is intentionally broken.** This is done for easier customization from the moment you start using Bootstrap. [Learn about our Sass options]() to enable these classes and more.

<Example>
  <!-- {% for color in site.data.theme-colors %}
  <div class="p-3 mb-2 bg-gradient-{{ color.name }} {% if color.name == "light" or color.name == "warning" %}text-dark{% else %}text-white{% endif %}">.bg-gradient-{{ color.name }}</div>
  {% endfor %} -->
</Example>


::: warning Dealing with specificity
Sometimes contextual classes cannot be applied due to the specificity of another selector. In some cases, a sufficient workaround is to wrap your element's content in a `<div>` with the class.
:::
