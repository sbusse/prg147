var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};
var confirmRes = function () {
    "use strict";
    var header = "";
    var html = "";
    var required = "<span>****Required****</span>";
    var message = "Please make sure all fields are complete";
    var first = $("fname").value;
    var last = $("lname").value;
    var email = $("rdate").value;
    var member = $("rtime").value;

    var frequency = "text";
    if ($("2").checked) {
        quantity = "2";
    }
    if ($("4").checked) {
        quantity = "4";
    }
    if ($("6").checked) {
        quantity = "6";
    }
    if ($("8").checked) {
        quantity = "8";
    }
    if (fname == "") {
        fname = required;
        header = message;
    }
    if (lname == "") {
        lname = required;
        header = message;
    }
    if (rdate == "") {
        rdate = required;
        header = message;
    }
    if (rtime == "") {
        rtime = required;
        header = message;
    }
    $("confirmation_header").firstChild.nodeValue = header;
    if (header == message) {
        html = "<tr><td>First Name:</td><td>" + fname + "</td></tr>";
        html += "<tr><td>Last Name:</td><td>" + lname + "</td></tr>";
        html += "<tr><td>Reservation Date:</td><td>" + rdate + "</td></tr>";
        html += "<tr><td>Reservation Time:</td><td>" + rtime + "</td></tr>";
        html += "<tr><td>Number of People:</td><td>" + rquantity + "</td></tr>";
        html += "<tr><td>Seating Preference:</td><td>" + rpreference + "</td></tr>";
        $("confirmation_msg").innerHTML = html;
    }
    else {
        $("confirmation_msg").innerHTML = "<tr><td>Thank you for your reservation.</td></tr>";
        //$("registration_form").submit();
        console.log("confirmation_msg");
    }
};
var resetForm = function () {
    "use strict";
    $("reserve").reset();
    $("confirmation_msg").innerHTML = "";
    $("confirmation_header").firstChild.nodeValue = "";
};
window.onload = function () {
    "use strict";
    // $("first").focus();
};