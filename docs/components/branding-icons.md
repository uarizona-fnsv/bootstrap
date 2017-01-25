---
layout: docs
title: UA Branding Icons
description: Documentation and examples for branding icons, the UA's icon font.
group: components
---

Icons are packaged for quick use.

## Available Icons

{% for icon in site.data.branding-icons %}
  <div class="text-center">
    <i class="{{ icon.class }}"></i>
    <p>{{ icon.name }}</p>
    {% example html %}
      <i class="{{ icon.class }}"></i>
    {% end example %}
  </div>
{% endfor %}

