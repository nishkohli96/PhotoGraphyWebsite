
var slideIndex = 0;
var newIndex = slideIndex;

$("#link_nature_pics").click(function(){
  slideIndex = 0;
  newIndex = slideIndex;
  showSlides(slideIndex);
});

$("#link_wildlife_pics").click(function(){
  slideIndex = 6;
  newIndex = slideIndex;
  showSlides(slideIndex);
});

$("#link_landmark_pics").click(function(){
  slideIndex = 12;
  newIndex = slideIndex;
  showSlides(slideIndex);
});

$("#link_human_pics").click(function(){
  slideIndex = 18;
  newIndex = slideIndex;
  showSlides(slideIndex);
});

$("#link_random_pics").click(function(){
  slideIndex = 24;
  newIndex = slideIndex;
  showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) 
{
  newIndex = newIndex + n ;
  if (newIndex > slideIndex + 5) { newIndex = slideIndex }
  if (newIndex < slideIndex) { newIndex = slideIndex + 5 }
  showSlides(newIndex);
}

// Thumbnail image controls
function showSlides(n) 
{
  var i;
  var slides = document.getElementsByClassName("gallerySlides");
  var dots = document.getElementsByClassName("demo");

  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) 
  {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n].style.display = "block";
  dots[n].className += " active";
}

function currentSlide(n) 
{
  showSlides(slideIndex = n);
}
