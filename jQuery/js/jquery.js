
$(document).ready(function(){
    $("#version1").click(function(){
        var div = $("div");
        div.animate({left:"250px"}, "slow");
        div.animate({height: "350px"}, "slow");
        div.animate({width: "350px"}, "slow");
        div.animate({fontSize: "50px"}, "slow");
        });


    $("#version2").click(function(){
        $("#box2").fadeOut("slow");
    });

});

