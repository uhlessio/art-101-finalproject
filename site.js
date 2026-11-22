// Get the cat pictures and start on the first cat
var cats = document.querySelectorAll("#catGallery img");
var currentCat = 0;


// Hide all the cats and show the one we are on
function showCat() {
    for (var i = 0; i < cats.length; i++) {
        cats[i].style.display = "none";
    }


    cats[currentCat].style.display = "block";
}


// Go to the next cat when the button is clicked
document.getElementById("nextCat").addEventListener("click", function () {
    currentCat = currentCat + 1;


    if (currentCat >= cats.length) {
        currentCat = 0;
    }


    showCat();
});


// Show the first cat when the page loads
showCat();
