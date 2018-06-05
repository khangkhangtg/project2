var slides = document.getElementsByClassName('mySlides1');
var curSlide = 0;
window.onload = function(){
  slides[0].style.display = 'block';
}

function changeSlide(n){
  if(n == -1){
    slides[curSlide].style.display = 'none';
    curSlide = (curSlide-1+2)%2;
    slides[curSlide].style.display = 'block';
  }else{
    slides[curSlide].style.display = 'none';
    curSlide = (curSlide+1)%2;
    slides[curSlide].style.display = 'block';
  }
}

$(function() {
    $(".slideshow2").carouFredSel({
        auto: {
            pauseOnHover: 'resume'
        },
        // auto: false,
        pagination: '.pagination',
        prev: '.btn-prev-ss2',
        next: '.btn-next-ss2'
    }); 
},{transition: true});