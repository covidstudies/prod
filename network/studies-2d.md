---
layout:     default
full-width: true
ext-js:     ["//unpkg.com/force-graph"]
css:        ["/assets/css/link-graph-3d.css"]
---

<div id="graph"></div>

<script type="module">

  fetch('/json/network-studies-data.json').then(res => res.json()).then(data => {
  const Graph = ForceGraph()
    (document.getElementById('graph'))
      .graphData(data)
      .nodeLabel('title')
      .nodeVal('value')
      .nodeAutoColorBy('group')
      .linkLabel('title')
      .linkAutoColorBy('group')
      .onNodeClick(node => {
        if (node.link.length) {
          window.open(node.link);
          window.focus();
        }
      })
      .onNodeDragEnd(node => {
        node.fx = node.x;
        node.fy = node.y;
        node.fz = node.z;
      });
    });
</script>
