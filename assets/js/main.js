// let table = new DataTable("#content");


$(document).ready(function () {

    $("#content").DataTable({
        paging: false,
        language: {
            "decimal":        "",
            "emptyTable":     "Pas de mémoires disponibles",
            "info":           "Affichage _START_ de _END_ de _TOTAL_ mémoires",
            "infoEmpty":      "Affichage 0 de 0 de 0 entrées",
            "infoFiltered":   "(filtre de _MAX_ d'entrées totales)",
            "infoPostFix":    "",
            "thousands":      ",",
            "lengthMenu":     "Affiche _MENU_ mémoires",
            "loadingRecords": "Chargement...",
            "processing":     "",
            "search":         "Recherche:",
            "zeroRecords":    "Pas de mémoires disponibles",
            "paginate": {
                "first":      "Premier",
                "last":       "Dernier",
                "next":       "Suivant",
                "previous":   "Précédent"
            },
            "aria": {
                "orderable":  "Arrange l'ordre à partir de cette colonne",
                "orderableReverse": "Arrange l'ordre inverse à partir de cette colonne"
            }
        }
    })

})