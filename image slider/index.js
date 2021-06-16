const images = ["test", "test 2", "test 3"];
let time = 3000;
let i = 0; 
function imageSlider(){
    document.getElementById("show").src = "images/" + images[i] + ".JPG";
    if( i < images.length){
          setTimeout(function(){
            document.getElementById("show").src = "images/" + images[i] + ".JPG";
             i++;
              imageSlider();
          }, 3000); 
  } else {
      i = 0;
      imageSlider();
  }
}


window.onload = imageSlider();




let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}




 