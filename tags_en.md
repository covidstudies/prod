---
layout: default
---

{% assign taglist = site.data.tags_en | sort  %}

<article>
<h2>Keywords</h2>
<ul>
{% for tag in taglist %}
  <li><a href="#{{ tag[0] }}">{{ tag[0] }} ({{ tag[1].size }})</a></li>
{% endfor %}
</ul>

{% for tag in taglist %}
<a id="{{ tag[0] }}"></a>
<h3>{{ tag[0] }}</h3>
<ul>
  {% assign urls = tag[1] | sort %}
  {% for url in urls %}
    {% assign name = url[0] %}
    {% assign link = url[1] %}
  <li><a href="{{ link }}">{{ name }}</a></li>
  {% endfor %}
</ul>
{% endfor %}
</article>

