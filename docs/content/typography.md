---
title: 'Typography'
description: 'Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.'
bootstrapLink: ''
---

Bootstrap sets basic global display, typography, and link styles. When more control is needed, check out the [textual utility classes]().

## Headings

All HTML headings, `<h1>` through `<h6>`, are available.

<Example>
  <h1>h1. Bootstrap heading</h1>
  <h2>h2. Bootstrap heading</h2>
  <h3>h3. Bootstrap heading</h3>
  <h4>h4. Bootstrap heading</h4>
  <h5>h5. Bootstrap heading</h5>
  <h6>h6. Bootstrap heading</h6>
</Example>

`.h1` through `.h6` classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.

<Example>
  <p class="h1">h1. Bootstrap heading</p>
  <p class="h2">h2. Bootstrap heading</p>
  <p class="h3">h3. Bootstrap heading</p>
  <p class="h4">h4. Bootstrap heading</p>
  <p class="h5">h5. Bootstrap heading</p>
  <p class="h6">h6. Bootstrap heading</p>
</Example>

### Customizing headings

Headings can be customized in several ways.

#### Coloring

When coloring the headers, use `primay-dark` (aka "Wildcat Blue") for `h1` and `h2`, and `primary` (aka "Azurite") for `h3` and `h4`. Avoid coloring on `h5` and `h6`, though grayscale variations are okay.

<Example>
  <h1 class="text-primary-dark">h1. Bootstrap heading</h1>
  <h2 class="text-primary-dark">h2. Bootstrap heading</h2>
  <h3 class="text-primary">h3. Bootstrap heading</h3>
  <h4 class="text-primary">h4. Bootstrap heading</h4>
  <h5>h5. Bootstrap heading</h5>
  <h6 class="text-black-50">h6. Bootstrap heading</h6>
</Example>

#### Meeting UA Branding Guidelines

::: warning Avoid unless necessary
Sometimes we are required to meet UA Branding guidelines. When required, use the options below for headings. Otherwise, don't use them. This is for a few reasons: serif headings create an awkward transition in document flow, and they don't completely fit, and they don't play nicely with UI elements.

If writing a large text section, it may make sense to use the `.serif` heading. Think carefully about it before implementing. If a more distinct visual differentiation is wanted, try using the [Coloring](#coloring) guidelines first.
:::

UA branding guidelines dictate a serif font for `h1` and `h2`. We choose not to do this by default in FSO Bootstrap, however, we can acheive this requirement using the `serif` class when required to do so.

<Example>
  <h1 class="serif">h1. Bootstrap heading</h1>
  <h2 class="serif">h2. Bootstrap heading</h2>
</Example>

Don't combine serif headings with uppercase text.

When using non-serif headings, UA branding guidelines generally require they also be made uppercase (via `.text-uppercase`, like so. They can also be combined with text coloring classes.

<Example>
  <h1 class="text-uppercase">h1. Bootstrap heading</h1>
  <h2 class="text-uppercase">h2. Bootstrap heading</h2>
  <h3>h3. Bootstrap heading</h3>
  <h4>h4. Bootstrap heading</h4>
</Example>

<Example>
  <h1 class="text-uppercase text-primary-dark">h1. Bootstrap heading</h1>
  <h2 class="text-uppercase text-primary-dark">h2. Bootstrap heading</h2>
  <h3 class="text-uppercase text-primary">h3. Bootstrap heading</h3>
  <h4 class="text-uppercase text-primary">h4. Bootstrap heading</h4>
  <h5>h5. Bootstrap heading</h5>
  <h6 class="text-black-50">h6. Bootstrap heading</h6>
</Example>

Don't color serif headings.

#### Secondary Heading

Use the included utility classes to recreate the small secondary heading text from Bootstrap 3.

<Example>
  <span class="h3">
    Fancy display heading
    <small class="text-muted">With faded secondary text</small>
  </span>
</Example>

## Display headings

Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a **display heading**—a larger, slightly more opinionated heading style. To make it further stand out, display headings use the serif font.

<Example>
  <h1 class="display-1">Display 1</h1>
  <h1 class="display-2">Display 2</h1>
  <h1 class="display-3">Display 3</h1>
  <h1 class="display-4">Display 4</h1>
</Example>

## Lead

Make a paragraph stand out by adding `.lead`.

<Example>
  <p class="lead">
    Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
  </p>
</Example>

## Inline text elements

Styling for common inline HTML5 elements.

<Example>
  <p>You can use the mark tag to <mark>highlight</mark> text.</p>
  <p><del>This line of text is meant to be treated as deleted text.</del></p>
  <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
  <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
  <p><u>This line of text will render as underlined</u></p>
  <p><small>This line of text is meant to be treated as fine print.</small></p>
  <p><strong>This line rendered as bold text.</strong></p>
  <p><em>This line rendered as italicized text.</em></p>
</Example>

`.mark` and `.small` classes are also available to apply the same styles as `<mark>` and `<small>` while avoiding any unwanted semantic implications that the tags would bring.

While not shown above, feel free to use `<b>` and `<i>` in HTML5. `<b>` is meant to highlight words or phrases without conveying additional importance while `<i>` is mostly for voice, technical terms, etc.

## Text utilities

Change text alignment, transform, style, weight, and color with our [text utilities]() and [color utilities]().

## Abbreviations

Stylized implementation of HTML's `<abbr>` element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.

Add `.initialism` to an abbreviation for a slightly smaller font-size.

<Example>
  <p><abbr title="attribute">attr</abbr></p>
  <p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
</Example>


## Blockquotes

For quoting blocks of content from another source within your document. Wrap `<blockquote class="blockquote">` around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote.

<Example>
  <blockquote class="blockquote">
    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  </blockquote>
</Example>


### Naming a source

Add a `<footer class="blockquote-footer">` for identifying the source. Wrap the name of the source work in `<cite>`.

<Example>
  <blockquote class="blockquote">
    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
</Example>


### Alignment

Use text utilities as needed to change the alignment of your blockquote.

<Example>
  <blockquote class="blockquote text-center">
    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
</Example>


<Example>
  <blockquote class="blockquote text-right">
    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
  </blockquote>
</Example>


## Lists

### Unstyled

Remove the default `list-style` and left margin on list items (immediate children only). **This only applies to immediate children list items**, meaning you will need to add the class for any nested lists as well.

<Example>
  <ul class="list-unstyled">
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Integer molestie lorem at massa</li>
    <li>Facilisis in pretium nisl aliquet</li>
    <li>Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
        <li>Vestibulum laoreet porttitor sem</li>
        <li>Ac tristique libero volutpat at</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Aenean sit amet erat nunc</li>
    <li>Eget porttitor lorem</li>
  </ul>
</Example>

### Inline

Remove a list's bullets and apply some light `margin` with a combination of two classes, `.list-inline` and `.list-inline-item`.

<Example>
  <ul class="list-inline">
    <li class="list-inline-item">Lorem ipsum</li>
    <li class="list-inline-item">Phasellus iaculis</li>
    <li class="list-inline-item">Nulla volutpat</li>
  </ul>
</Example>

### Triangle

For a more UA look, use the `.list-triangle` class.

<Example>
  <ul class="list-triangle">
    <li>Lorem ipsum</li>
    <li>Phasellus iaculis</li>
    <li>Nulla volutpat</li>
  </ul>
</Example>


### Description list alignment

Align terms and descriptions horizontally by using our grid system's predefined classes (or semantic mixins). For longer terms, you can optionally add a `.text-truncate` class to truncate the text with an ellipsis.

<Example>
  <dl class="row">
    <dt class="col-sm-3">Description lists</dt>
    <dd class="col-sm-9">A description list is perfect for defining terms.</dd>
    <dt class="col-sm-3">Euismod</dt>
    <dd class="col-sm-9">
      <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
      <p>Donec id elit non mi porta gravida at eget metus.</p>
    </dd>
    <dt class="col-sm-3">Malesuada porta</dt>
    <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>
    <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
    <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>
    <dt class="col-sm-3">Nesting</dt>
    <dd class="col-sm-9">
      <dl class="row">
        <dt class="col-sm-4">Nested definition list</dt>
        <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
      </dl>
    </dd>
  </dl>
</Example>

## Serif

Serif fonts should generally be avoided for text content. However, UA branding includes both a serif (Milo) and non-serif (Milo Sans) font. To catch any instances in which a serif font _is_ required, use the `.text-serif` utility.

<Example>
  <p>I'm sans serif.</p>
  <p class="text-serif">I'm serif.</p>
</Example>


## Responsive typography

*Responsive typography* refers to scaling text and components by simply adjusting the root element's `font-size` within a series of media queries. Bootstrap doesn't do this for you, but it's fairly easy to add if you need it.

Here's an example of it in practice. Choose whatever `font-size`s and media queries you wish.

```scss
html {
  font-size: 1rem;
}

@include media-breakpoint-up(sm) {
  html {
    font-size: 1.2rem;
  }
}

@include media-breakpoint-up(md) {
  html {
    font-size: 1.4rem;
  }
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 1.6rem;
  }
}
```
