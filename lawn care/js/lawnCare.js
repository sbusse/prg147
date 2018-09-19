
var $ = function (id) {
    return document.getElementById(id);
    "use strict";
    }
    
 var calculate_total = function() {
    var lfront = parseFloat($("lfront").value);
    var wfront = parseFloat($("wfront").value);
    var lback = parseFloat($("lback").value);
    var wback = parseFloat($("wback").value);
    var lside1 = parseFloat($("lside1").value);
    var wside1 = parseFloat($("wside1").value);
    var lside2 = parseFloat($("lside2").value);
    var wside2 = parseFloat($("wside2").value);  
    alert("heyhey");
    }

    if (isNaN(lfront) || isNaN(wfront) || isNaN(lback) || isNaN(wback) || isNaN(lside1) || isNaN(wside1) || isNaN(lside2) || isNaN(wside2)) {
        alert("Invalid Entry - Please enter a number.")
        alert("yoyo");
    }
    else {
        var  total = ((lfront * wfront) + (lback * wback) + (lside1 * wside1) + (lside2 * wside2) / 250) * 1;
        total = total.toFixed(2);
        $("totalLawn").value = "$" + total;
        $("totalArea").value = total + " sq.";
        alert("hey");
    }


window.onload = function() {
    $("submit").onclick = calculate_total;
    alert("Hey your not working!!!")
}
