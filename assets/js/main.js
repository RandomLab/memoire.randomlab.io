$(document).ready(function() {
     let table = $('#dataTable').DataTable({
                ajax: {
                    url: 'data.json',  
                    dataSrc: 'students'  
                },
                columns: [
                    { data: 'name' },
                    { data: 'title' },
                    { data: 'year' },
                    { 
                        data: 'html',
                        render: function(data) {
                            console.log(data)
                            if (data === "") {
                                return "";
                            } else {
                                return `<a href="${data}/" target="_blank">👁</a>`;
                            }
                        }
                    },
                    { 
                        data: 'pdf',
                        render: function(data) {
                            if (data === "") {
                                return "";
                            } else {
                                return `<a href="${data}" target="_blank">&#9998;</a>`;
                            }
                        }
                    }
                ],
                // pageLength: 10,
                // lengthMenu: [5, 10, 25, 50],
                order: [[2, 'desc']], 
                searching: true,
                paging: false,
                info: false,
                language: {
                    search: 'Recherche: ',
                    lengthMenu: 'Show _MENU_ entries',
                    info: 'Showing _START_ to _END_ of _TOTAL_ entries',
                    paginate: {
                        first: 'First',
                        last: 'Last',
                        next: 'Next',
                        previous: 'Previous'
                    }
                }
            });

            $('#dataTable').on('error.dt', function(e, settings, techNote, message) {
                console.error('DataTable error:', message);
                $('#error').text('Error loading data. Make sure data.json exists in the same directory as this HTML file.').show();
            });
});


// let table = new DataTable("#content");


// $(document).ready(function () {

//     $("#content").DataTable({
//         order: [[0, 'asc']],
//         destroy: true,
//         paging: false,
//         language: {
//             "decimal":        "",
//             "emptyTable":     "Pas de mémoires disponibles",
//             "info":           "Affichage _START_ de _END_ de _TOTAL_ mémoires",
//             "infoEmpty":      "Affichage 0 de 0 de 0 entrées",
//             "infoFiltered":   "(filtre de _MAX_ d'entrées totales)",
//             "infoPostFix":    "",
//             "thousands":      ",",
//             "lengthMenu":     "Affiche _MENU_ mémoires",
//             "loadingRecords": "Chargement...",
//             "processing":     "",
//             "search":         "Recherche:",
//             "zeroRecords":    "Pas de mémoires disponibles",
//             "paginate": {
//                 "first":      "Premier",
//                 "last":       "Dernier",
//                 "next":       "Suivant",
//                 "previous":   "Précédent"
//             },
//             "aria": {
//                 "orderable":  "Arrange l'ordre à partir de cette colonne",
//                 "orderableReverse": "Arrange l'ordre inverse à partir de cette colonne"
//             }
//         }
//     })

// })