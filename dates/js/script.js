var $ = function (id) {
    return document.getElementById(id);
}

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;  
var year = date.getFullYear();



// function setTheDate(){
//     $("today").value = month + "/" + day + "/" + year;
// }

// $(document).ready(function(){
//     var years = "";
//     $('#dateAnn').datepicker({
//         onSelect: function (value, ui) {
//             var today = new Date();
//             years = today.getFullYear() - ui.selectedYear;
//             $('#time').val(years);
//         },
//         changeMonth: true,
//         changeYear: true
//     })
// });

function getAnniversary(){
    var years = "";
    $('#dateAnn').datepicker({
        onSelect: function(value, ui) {
            var today = new Date();
            years = today.getFullYear() - ui.selectedYear;
            $('#time').val(years);
        },
        changeMonth: true,
        changeYear: truue
    })
}


function dayGreet(){
    var dateStatement = "";
    var d = new Date();
    var todayIs = d.getDay();

    switch (todayIs){
        case 0:
        case 6:
            dateStatement = "It's the Weekend ALL Weekend Long";
            break;
        case 1:
            dateStatement = "Ugh . . . Monday";
            break;
        case 2:
            dateStatement = "Totally Tuesday";
            break;
        case 3:
            dateStatement = "Hump Day Wednesday";
            break;
        case 4:
            dateStatement = "Thankfully Thursday";
            break;
        case 5:
            dateStatement = "Finally Friday";
            break;
        default:
            dateStatement = "No one should see this"
    }
    document.getElementById("myday").innerHTML = dateStatement;
}

function daysToVacation(){

    var today = new Date();

    $("todaysDate").innerHTML = today.toDateString();

    var vacation = new Date ("12/31/2018");
    $("vacationDue").innerHTML = vacation.toDateString();

    if (today < vacation){
        var timeDiff = Math.abs(vacation.getTime() - today.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        $("daysleft").innerHTML = diffDays;
    } else {
        $("daysleft").innerHTML = "Your vacation is overdue"
    }
}

window.onload = function(){
    dayGreet();
    daysToVacation();
    getAnniversary();
}