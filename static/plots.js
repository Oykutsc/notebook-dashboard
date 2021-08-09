$('#language_cell_count_select').on('change',function(){

    $.ajax({
        url: "/language_cell_count",
        type: "GET",
        contentType: 'application/json;charset=UTF-8',
        data: {
            'selected': document.getElementById('language_cell_count_select').value

        },
        dataType:"json",
        success: function (data) {
            Plotly.newPlot('cell_count_graph', data );
        }
    });
})

$('#language_func_select').on('change',function(){

    $.ajax({
        url: "/language_func",
        type: "GET",
        contentType: 'application/json;charset=UTF-8',
        data: {
            'selected': document.getElementById('language_func_select').value

        },
        dataType:"json",
        success: function (data) {
            Plotly.newPlot('func_plot', data );
        }
    });
})

function openLan(evt, lanName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(lanName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  $('#example').DataTable({
    scrollY:        '60vh',
    paging:         false,
    scrollX: false,
} );
$('.dataTables_filter input[type="search"]').css(
    {'width':'350px','display':'inline-block'}
 );