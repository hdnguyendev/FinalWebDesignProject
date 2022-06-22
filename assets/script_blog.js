window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000
  });
});

