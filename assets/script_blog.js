window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000
  });
});

// dark mode
function loadTheme() {
	// Lấy giá trị của theme đã được lưu trong localStorage
	// Nếu không có thì mặc định là 'light'
	const theme = localStorage.getItem('theme') || 'light';

	document.querySelector(':root').setAttribute('data-theme', theme);

	// Thay đổi vị trí của nút toggle nếu là dark mode
	if (theme !== 'light') {
		document.getElementById('toggleBtn').classList.add('active');
	}
}

function setTheme(isLight = true) {
	const theme = isLight ? 'light' : 'dark';
	localStorage.setItem('theme', theme);
}

window.onload = function () {
	loadTheme();

	const themeBtn = document.getElementById('toggleBtn');

	themeBtn.addEventListener('click', function () {
		// Lấy thuộc tính data-theme
		const root = document.querySelector(':root');
		const isLightMode =
			root.getAttribute('data-theme') === 'dark' ? false : true;

		// toggle theme mode
		if (isLightMode) {
			root.setAttribute('data-theme', 'dark');
		} else {
			root.setAttribute('data-theme', 'light');
		}

		setTheme(!isLightMode);

		// thay đổi vị trí của button
		this.classList.toggle('active');
	});
};