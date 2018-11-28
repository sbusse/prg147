$(document).ready(function(){
    var age = "";
    $('#dateAnn').datepicker({
        onSelect: function (value, ui) {
            var today = new Date();
            age = today.getFullYear() - ui.selectedYear;
            $('#time').val(age);
        },
        changeMonth: true,
        changeYear: true
    })
});