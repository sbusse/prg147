$(document).ready(function(){

    "use strict";
    var nextSlide = $("#slides img:first-child");
    var nextCaption;
    var nextSlideSource;

    
    $("#side-right").click(function(){
        $("#caption").fadeOut(1500);
        // $("#slide").fadeOut("slow");
         $("#slide").fadeOut(1500, function(){
            if(nextSlide.next().length === 0){  //This tests if it's at the "LAST" slide, and IF SO it starts over at the first child
                nextSlide = $("#slides img:first-child");
        }   else {
                nextSlide = nextSlide.next();
        }
        nextSlideSource = nextSlide.attr("src"); 
        nextCaption = nextSlide.attr("alt");

        $("#slide").attr("src", nextSlideSource).fadeIn(1500);
        $("#caption").text(nextCaption).fadeIn("slow");

         });
    });

    $("#side-left").click(function(){
        $("#caption").fadeOut(1500);
        $("#slide").fadeOut(1500, function(){
            if(nextSlide.prev().length === 0){  //This tests if it's at the "LAST" slide, and IF SO it starts over at the first child
                nextSlide = $("#slides img:last-child");
        }   else {
                nextSlide = nextSlide.prev();
        }
        nextSlideSource = nextSlide.attr("src"); 
        nextCaption = nextSlide.attr("alt");

        $("#slide").attr("src", nextSlideSource).fadeIn(1500);
        $("#caption").text(nextCaption).fadeIn("slow");

       });
    });



});