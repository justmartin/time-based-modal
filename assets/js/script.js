$(document).ready(function() {
	$(".dropdown-button").dropdown();
	$('.carousel.carousel-slider').carousel({full_width: true});
	$(".button-collapse").sideNav();
});


//CODE FOR MODAL
document.getElementById("page-body").onload = function() {
	setTimeout(modalPopup, 3000);
};

var modalPopup = function(){
	// Get the modal
	var modal = document.getElementById('newsletter-modal');
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];
	//displays the Modal
	modal.style.display = "block";
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	modal.style.display = "none";
	}
}

document.getElementById("submit").onclick = function() {
	var modal = document.getElementById('newsletter-modal');
	modal.style.display = "none";
};