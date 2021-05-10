let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	let slides = document.getElementsByClassName("mySlides");

	if(n > slides.length) {
		slideIndex = 1;
	} else if(n < 1) {
		slideIndex = slides.length;
	}

	for(const slide of slides) {
		slide.style.display = "none";
	}

	slides[slideIndex - 1].style.display = "flex";
}
const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
});
