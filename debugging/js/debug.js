console.log();

"use strict";
var $ = function (id) {
    return document.getElementById(id);
    "use strict";
    }

"use strict";  
 var calculate_total = function() {
    var lfront = parseFloat($("lfront").value);
    console.log(lfront);
    var wfront = parseFloat($("wfront").value);
    var lback = parseFloat($("lback").value);
    var wback = parseFloat($("wback").value);
    var lside1 = parseFloat($("lside1").value);
    var wside1 = parseFloat($("wside1").value);
    var lside2 = parseFloat($("lside2").value);
    var wside2 = parseFloat($("wside2").value);  
    // alert("heyhey");

    if (isNaN(lfront) || isNaN(wfront) || isNaN(lback) || isNaN(wback) || isNaN(lside1) || isNaN(wside1) || isNaN(lside2) || isNaN(wside2)) {
        alert("Invalid Entry - Please enter a number.")
        // alert("yoyo");
    }
    
    else {
        var  area = ((lfront * wfront) + (lback * wback) + (lside1 * wside1) + (lside2 * wside2));
        var total = area / 250;
        total = total.toFixed(2);
        $("totalLawn").value = "$" + total;
        $("totalArea").value = area + " sq.";
        // alert("hey");
        console.log(total);
    }
}

window.onload = function() {
    $("fSubmit").onclick = calculate_total;
    // alert("Hey your not working!!!")
    console.log(fSubmit)
}
