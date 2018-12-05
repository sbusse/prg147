$(document).ready(function(){
    
});


function timeTogether(){

    var today = new Date();

    $("todaysDate").innerHTML = today.toDateString();

    var wedding = document.getElementById("myDate").value;
    // $("weddingDay").innerHTML = wedding.toDateString();
    document.getElementById("demo").innerHTML = x;
    
    if (today < wedding){
        var timeDiff = Math.abs(wedding.getTime() - today.getTime());
        var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        $("daysTogether").innerHTML = diffDays;
    } else {
        $("daysTogether").innerHTML = "You've been together a LONG time!!!"
    }
}

var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;  
var year = date.getFullYear();




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