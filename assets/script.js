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

menuIcon.addEventListener('click',function(){
  navMoblie.classList.toggle('open')
})

 // Auto close menu 
 var menuItems = document.querySelectorAll('.nav__mobile_tablet li');
 for (var i = 0 ; i < menuItems.length ; i++){
     var menuItem = menuItems[i];
     
     menuItem.onclick = function(event){
        navMoblie.classList.remove('open')
     }
 }