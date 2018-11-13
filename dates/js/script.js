var $ = function (id) {
    return document.getElementById(id);
}

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();

function setDate(){
    $("today").value = month + "/" + day + "/" + year;
}

function calculate(){
    var today = new Date (("today").value);
    var graduation = $("graduation").value;

    var gmonth = (parseInt(birthday.substring(0,2)));
    var gyear = (parseInt(graduation(6,0)));
}