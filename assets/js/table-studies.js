$(document).ready( function () {
  var table = $('#studies').DataTable({
    lengthMenu: [[10, 50, 100, -1], [10, 50, 100, "All"]],
    columnDefs: [ {
      width: "35%"
    },{
      targets: 2,
      width: "35%",
      render: $.fn.dataTable.render.ellipsis( 100, true )
    },{
      targets: 3,
      render: function ( data, type, row ) {
            return '<a href=' + data + ' target="_blank">Link</a>';
        }
    } ]
  })
});
