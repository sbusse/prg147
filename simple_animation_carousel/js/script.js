$(document).ready(function(){

        $("#side-right").click(function(){
            var currenSlide = $(".longLineOfImg").css("left");
            if(parseInt(currenSlide) < -1600){
                $(".longLineOfImg").css({
                    left: 405
                })
            }
            $(".longLineOfImg").animate({
                left: '-=405'
            },1000);
        });

        $("#side-left").click(function(){
            var currenSlide = $(".longLineOfImg").css("left");
            if(parseInt(currenSlide) >= 0){
                $(".longLineOfImg").css({
                    left: -2023
                })
            }
            $(".longLineOfImg").animate({
                left: '+=405'
            },1000);
        });

});