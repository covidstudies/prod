---
layout:    table_en
title:     Studies
ext-js:    ["//code.jquery.com/jquery-3.6.0.min.js", "//cdn.datatables.net/1.11.3/js/jquery.dataTables.min.js", "//cdn.datatables.net/plug-ins/1.11.3/dataRender/ellipsis.js"]
ext-css:   ["//cdn.datatables.net/1.11.3/css/jquery.dataTables.min.css", "//cdn.datatables.net/responsive/2.2.9/css/responsive.dataTables.min.css"]
js:        ["/assets/js/table-studies.js"]
css:       ["/assets/css/table-studies.css"]
---

<h1>Studies</h1>
 
<div class="datatable">
  <table id="studies" class="display responsive" style="width:100%">
    <thead>
      <tr>
        <th>Date</th>
        <th>Title</th>
        <th>Description</th>
        <th>URL</th>
        <th>Group</th>
      </tr>
    </thead>
    <tbody>
    {% for studie in site.studies %}
      <tr>
        <td>{{ studie.date | date: "%Y-%m-%d" }}</td>
        <td>{{ studie.en.subtitle }}</td>
        <td>{{ studie.en.description }}</td>
        <td>{{ studie.credit }}</td>
        <td>{{ studie.group }}</td>
      </tr>
    {% endfor %}
    </tbody>
  </table>
</div>
