var $   = function(id) {
    return document.getElementById(id);
}

var images = ["./images/step1.jpg", 
    "./images/step2.jpg", 
    "./images/step3.jpg", 
    "./images/step4.jpg",
    "./images/step5.jpg", 
    "./images/step6.jpg", 
    "./images/step7.jpg", 
    "./images/step8.jpg", 
    "./images/step9.jpg",  
    "./images/step10.jpg" ];
var titles = ["Step 1", 
    "Step 2", 
    "Step 3", 
    "Step 4", 
    "Step 5",
    "Step 6",
    "Step 7",
    "Step 8",
    "Step 9",
    "Step 10"];
var captions = ["First, fold a fegular 8 1/2 inch x 11 inch piece of paper in half 'Hot Dog Style'.", 
    "Take the top right and left corners, and fold them down to the middle, as sown below.", 
    "Pull the point of the cockpit down to the bottom of the paper, leaving a gap of about 1.5 cm at the end of the paper.",
    "Flip the paper over and fold down the top of the paper about .75 cm across the width of the paper.", 
    "Flip the paper back over to the front and create more cockpit folds, (similar to Step 2).", 
    "Take the small exposed triangle and fold it over the base of your cockpit, as shown below.", 
    "With the last fold facing you, fold the airplane away from you, creatingsomething that looks similar to the picture below.", 
    "Fold down one of the wings a few inches past the body of the plane, making  a fold that is straight all the way across.", 
    "Once again, go over all your previous folds until your plane can hold a shape consistent with the photo below.", 
    "Finally, take each tip of the wing and fold it back up about 1 inch to create flaps."];

var count = images.length -1;
var image = new Image();  //creating an object "Image"
var viewableImg = [0,1,2,3,4];

function displayViewImg(){
    $("viewImg1").src = images[viewableImg[0]];
    $("viewImg2").src = images[viewableImg[1]];
    $("viewImg3").src = images[viewableImg[2]];
    $("viewImg4").src = images[viewableImg[3]];
    $("viewImg5").src = images[viewableImg[4]];
    
    $("large").src = images[viewableImg[2]];

    $("title").innerHTML = titles[viewableImg[2]];
    $("caption").innerHTML = captions[viewableImg[2]];

    current++;
}

function moveLeft(){
    viewableImg[4] = viewableImg[3];
    viewableImg[3] = viewableImg[2];
    viewableImg[2] = viewableImg[1];
    viewableImg[1] = viewableImg[0];
    viewableImg[0]--;
    if (viewableImg[0] < 0){
        viewableImg[0] = count;
    }
    displayViewImg();
    
}

function moveRight(){

    viewableImg[0] = viewableImg[1];
    viewableImg[1] = viewableImg[2];
    viewableImg[2] = viewableImg[3];
    viewableImg[3] = viewableImg[4];
    viewableImg[4]++;
    if (viewableImg[4] > count){
        viewableImg[4] = 0;
    }
    displayViewImg();
}

var preload = function(){
    for (var i=0; i <count; i++){
        image.src = images[i];
        images.push(image);
    }
}
window.onload = function(){
    preload();
    displayViewImg();
}