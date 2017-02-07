---
layout: docs
title: Brand Icons
description: Indicate the current page's location within a navigational hierarchy.
group: components
---

Use these icons to reflect University of Arizona branding.

## Contents

TODO

The Icons can be used in empty elements such as `<i>` and `<span>`. When using them with text elements, be sure to include the icon within a span.

## Sizing

TODO

{% callout warning %}
#### Accessible icons
Modern versions of assistive technologies will announce CSS generated content, as well as specific Unicode characters. To avoid unintended and confusing output in screen readers (particularly when icons are used purely for decoration), we hide them with the `aria-hidden="true"` attribute.

If you're using an icon to convey meaning (rather than only as a decorative element), ensure that this meaning is also conveyed to assistive technologies – for instance, include additional content, visually hidden with the `.sr-only` class.

If you're creating controls with no other text (such as a `<button>` that only contains an icon), you should always provide alternative content to identify the purpose of the control, so that it will make sense to users of assistive technologies. In this case, you could add an `aria-label` attribute on the control itself.
{% endcallout %}

## Available Icons

{% for icon in site.data.branding-icons %}
<div class="text-center">
  <p>{{ icon.name }}</p>
  {% example html %}
    <i class="{{ icon.class }}"></i>
  {% endexample %}
</div>
{% endfor %}
