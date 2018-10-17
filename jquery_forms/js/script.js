

// VALIDATION
$(document).ready(function(){

    $("#myForm").submit(function(event){
    isValidForm = true;
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    var phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    var email = $("#emailAddress").val().trim();  // TRIM cleans up all the blanke spaces from text
    if(email === ""){
        $("#emailAddress").next().text("Invalid Input");
        isValidForm = false;
    }else if(!emailPattern.test(email)) {           //PASSES email info for further testing
        $("#emailAddress").next().text("Invalid Input");
        isValidForm = false;
    }else {
        //it is true so DO something
    }

    var phoneNum = $("#phoneNumber").val().trim();  // TRIM cleans up all the blanke spaces from text
    if(phoneNum === ""){
        $("#phoneNumber").next().text("Invalid Input");
        isValidForm = false;
    }else if(!phonePattern.test(phoneNum)) {           //PASSES email info for further testing
        $("#phoneNumber").next().text("Invalid Input");
        isValidForm = false;
    }else {
        //it is true so DO something
    }


    if (isValidForm == false){
        event.preventDefault();
    }
});


});

