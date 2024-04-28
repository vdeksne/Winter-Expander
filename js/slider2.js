let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides1(n) {
  showSlides2(slideIndex2 += n);
}

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides2(n) {
  let i;
  let slides1 = document.getElementsByClassName("mySlides1");
  let dots1 = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption-1");
  if (n > slides1.length) {slideIndex2 = 1}
  if (n < 1) {slideIndex2 = slides1.length}
  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");
  }
  slides1[slideIndex2-1].style.display = "block";
  dots1[slideIndex2-1].className += " active";
  captionText.innerHTML = dots1[slideIndex2-1].alt;
}