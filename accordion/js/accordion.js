var accord = document.getElementsByClassName("accordion");
var iCounter = 0;


for (iCounter = 0; iCounter < accord.length; iCounter++) {
    accord[iCounter].addEventListener("click", function(){
   

            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            if(panel.style.display == "block"){
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }


    });
}