
 $( function() {
     "use strict";
  $( "#moon" ).resizable();
} );



$(document).ready(function(){
  "use strict";
//   $("#house").fadeIn(3000)
  $("#zombie").fadeIn(4000);
  $("#skull").fadeIn(5000);
  $("#moon").fadeIn(6000);
  
  $("#skull").click(function(){
      $(this).animate({
         width: "200%",
         height: "200%",
         opacity: '0'}, 5000);
  });

  $("#moon").click(function(){
    $(this).animate({
       width: "100%",
       height: "100%",
       opacity: '0'}, 5000);
    });


//   $("#moon").click(function(){
//     $(this).animate({
//        width: "200%",
//        height: "200%",
//        opacity: '0'}, 5000);
// });
  
   $("#zombie").click(function(){
      $(this).fadeOut("slow");
  });
  
});