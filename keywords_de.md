---
layout: default
---

{% assign keywordlist = site.data.keywords_de | sort  %}
{% assign indexlist = '' | split: ',' %}

{% for keyword in keywordlist %}
  {% assign index = keyword[0] | append: ".self" | split: ',' %}
  {% assign indexlist = indexlist | concat: index %}
  {% if keyword[1].aliases.size > 0 %}
    {% for alias in keyword[1].aliases %}
      {% assign aliasindex = alias | append: "." | append: keyword[0] | split: ',' %}
      {% assign indexlist = indexlist | concat: aliasindex %}
    {% endfor %}
  {% endif %}
{% endfor %}
{% assign sorted_index = indexlist | sort %}

<article>
<h2>Index</h2>
<ul>

{% for index in sorted_index %}
  {% assign index_list = index | split: "." %}
  {% if index_list[1] == "self" %}
<li><a href="#{{ index_list[0] }}">{{ index_list[0] }}</a></li>
  {% else %}
<li><a href="#{{ index_list[1] }}">{{ index_list[0] | replace: "\", "" | replace: "^", "" | replace: "$", "" }}<div data-icon="ei-chevron-right" data-size="s"></div>{{ index_list[1] }}</a></li>
  {% endif %}
{% endfor %}
</ul>
</article>

