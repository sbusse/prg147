var $ = function(id) {
    return document.getElementById(id);
}

var timer;
var currentSlide = 0;
var image = new Image();  //creating an object "Image"

//declaring arrays
var images = ["./images/butterfly1.jpg", 
"./images/butterfly2.jpg", 
"./images/butterfly3.jpg", 
"./images/butterfly4.jpg", 
"./images/butterfly5.jpg",
"./images/butterfly6.jpg",
"./images/butterfly7.jpg",
"./images/butterfly8.jpg",
"./images/butterfly9.jpg",
"./images/butterfly10.jpg" ];
var titles = ["Looks like a moth to me", 
"Looks like a Stealth aircraft", 
"Another pretty butterfly", 
"This guy is called a Papilio",
"This is a fancy moth", 
"This is a Peacock Butterfly", 
"This is a Monarch", 
"This is called a Stripe Core", 
"A danty butterfly",  
"This is a Swallowtail Butterfly"];
var captions = ["This butterfly likes purple flowers.", 
"There must be something about purple flowers", 
"But not just another pretty face",
"Did you know there are over 550 species in this family?", 
"Fancy moths are pretty also",
"They can be found throughout the England, Ireland, Scotland, Wales (in the northern parts of the Europe) and in temperate Asia.",
"At least it looks like a Monarch",
"I want to know what that plant is!",
"I can see through him",
"Looks like another Stealth"];

var count = images.length; // keeps count of how many images in array

//preloading images
var preload = function(){
    for (var i=0; i< count; i++){
        image.src = images[i];
        images.push(image);
    }
}

//set up play & pause settings
var slidecontrol = function(){
    var path = $("control").src;
    var testState = new RegExp("play");
    if(testState.test(path)){

        $("control").src = "images/pause.png";
        displayImage();

    } else {
        $("control").src = "images/play.png";
        clearTimeout(timer);
    }
}

var displayImage = function(){
    if (currentSlide > 9){
        currentSlide = 0;
    }

    $("main_image").src = images[currentSlide];
    $("title").innerHTML = titles[currentSlide];
    $("caption").innerHTML = captions[currentSlide];

    currentSlide++;
    timer = setTimeout(displayImage, 2000);
}

window.onload = function(){
    preload();

}