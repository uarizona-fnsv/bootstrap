<!-- ---
layout: docs
title: Branding
description: Indicate the current page's location within a navigational hierarchy.
group: components
---

Indicate the current page's location within a navigational hierarchy. Separators are automatically added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content).

{% for icon in site.data.branding-icons %}
  <div class="text-center">
    <i class="{{ icon.class }}"></i>
    <p>{{ icon.name }}</p>
    {% example html %}
      <i class="{{ icon.class }}"></i>
    {% end example %}
  </div>
{% endfor %}-->

