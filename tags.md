---
layout: default
---

{% assign taglist = site.data.tags_de | sort  %}

<article>
<ul>
{% for tag in taglist %}
  <li><a href="#{{ tag[0] }}">{{ tag[0] }} ({{ tag[1].size }})</a></li>
{% endfor %}
</ul>

{% for tag in taglist %}
<h3 id="{{ tag[0] }}">{{ tag[0] }}</h3>
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

