
  var slideIndex = 1;
  var newIndex = slideIndex;

  $("#link_nature_pics").click(function(){
    slideIndex = 1;
    showSlides(slideIndex);
  });

  $("#link_wildlife_pics").click(function(){
    slideIndex = 7;
    showSlides(slideIndex);
  });

  $("#link_landmark_pics").click(function(){
    slideIndex = 13;
    showSlides(slideIndex);
  });

  $("#link_human_pics").click(function(){
    slideIndex = 19;
    showSlides(slideIndex);
  });

  $("#link_random_pics").click(function(){
    slideIndex = 25;
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
    slides[n-1].style.display = "block";
    dots[n-1].className += " active";
  }
  function currentSlide(n) 
  {
    showSlides(slideIndex = n);
  }
