---
layout:    table_en
title:     Studies
---
<article> 
<div class="datatable">
  <table id="studies" class="display responsive" style="width:100%">
    <thead>
      <tr>
        <th>Date</th>
        <th>URL</th>
        <th>Filename</th>
      </tr>
    </thead>
    <tbody>
    {% for studie in site.studies reversed %}
      <tr>
        <td>{{ studie.date | date: "%Y-%m-%d" }}</td>
        <td>{{ studie.credit }}</td>
        <td><a href="{{ studie.id }}">{{ studie.path | split: "/" | last }}</a></td>
      </tr>
    {% endfor %}
    </tbody>
  </table>
</div>
</article> 
