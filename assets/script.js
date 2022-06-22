
        // Loadpage used JQuery
        $(window).on("load", function () {
            jQuery("#status").fadeOut();
            jQuery("#loader").fadeOut();
        });

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").classList.add('box-shadow');
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("header").classList.remove('box-shadow');
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const menuIcon = document.querySelector('#mobile-menu');
const navMoblie = document.querySelector('.nav__mobile_tablet');

menuIcon.addEventListener('click', function () {
  navMoblie.classList.toggle('open')
})

// Auto close menu 
var menuItems = document.querySelectorAll('.nav__mobile_tablet li');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = function (event) {
    navMoblie.classList.remove('open')
  }
}

// Zoom image - copy
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll(".myImg");
var modalImg = document.getElementById("img01");

for (let i=0;i <img.length ;i++){
  img[i].onclick = function () {
    console.log(i);
    modal.style.display = "block";
    modalImg.src = img[i].src;
 

  }
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// slider 
// const slides = document.querySelectorAll('.slider');
// var index=0;

// setInterval(() => {
//   index++;

//   if (index > slides.length-1) {
//     index = 0;
//   }
//   runSlide();
// }, 5000);

// function runSlide(){
//   slides.forEach(function(slide){
//     slide.classList.remove('active');
//   })

//   slides[index].classList.add('active');
// }


// Show more 
const btnShow = document.querySelector('.btnShowmore');
const blog_list = document.querySelectorAll('.blog__item');
btnShow.addEventListener('click',showMoreBlog);

function showMoreBlog(){

  blog_list.forEach(function(item){
      item.classList.toggle('show');
     
     
  })
  if (btnShow.innerHTML == "Hidden") btnShow.innerHTML = "Show More" ; else {
    btnShow.innerHTML = "Hidden";
  }
}


// slider - slick
$(document).ready(function(){
  $('#slider').slick({
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000
  });
})