$(document).ready(function(){
    var slider = $("slde_container");
    num_slots = 10;
    count = 0;

        $("#right-button").click(function(){
            count += 1;

            if(count >= num_slots) {
                count = 0;
                slider.animate({
                    left: "-=100%"
                })
                slider.animate({
                    left: "+=1000%"
                }, 0);
            } else {
                slider.animate({
                    left: "-=100%"
                });
            }
        });

        $('#left-button').click(function() {
            alert('left');
        });

});