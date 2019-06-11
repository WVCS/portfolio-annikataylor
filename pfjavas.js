
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}
window.onscroll = function() {myFunction()};
function myFunction() {
    var topnav = document.getElementById("Nav_Bar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topnav.className = "at-bar" + " at-card" + " at-animate-top" + " at-white";
    } else {
        topnav.className = topnav.className.replace(" at-card at-animate-top at-white", "");
    }
}
function toggleFunction() {
    var x = document.getElementById("topnavDemo");
    if (x.className.indexOf("at-show") == -1) {
        x.className += " at-show";
    } else {
        x.className = x.className.replace(" at-show", "");
    }
}


var slideIndex = 1;
currentSlide(1);
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
