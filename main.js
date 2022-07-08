jQuery(document).ready(function($){
	//open navigation clicking the menu icon
	$('.cd-nav-trigger').on('click', function(event){
		event.preventDefault();
		toggleNav(true);
	});
	//close the navigation
	$('.cd-close-nav, .cd-overlay').on('click', function(event){
		event.preventDefault();
		toggleNav(false);
	});
	//select a new section
	$('.cd-nav li').on('click', function(event){
		event.preventDefault();
		var target = $(this),
			sectionTarget = target.data('menu');
		if( !target.hasClass('cd-selected') ) {
			target.addClass('cd-selected').siblings('.cd-selected').removeClass('cd-selected');
			loadNewContent(sectionTarget);
		} else {
			toggleNav(false);
		}
	});

	function toggleNav(bool) {
		$('.cd-nav-container, .cd-overlay').toggleClass('is-visible', bool);
		$('main').toggleClass('scale-down', bool);
	}
});

// ScrolRevealJS

var slideUp = {
    distance: '10%',
    origin: 'bottom',
    delay: 500,
    duration: 3000,
    easing: 'ease',
    opacity: 0,
    reset: false
};
ScrollReveal().reveal('.slide-up', slideUp);

var slideTop = {
    distance: '10%',
    origin: 'top',
    delay: 500,
    duration: 2000,
    easing: 'ease',
    opacity: 0,
    reset: false
};
ScrollReveal().reveal('.slide-top', slideTop);

var slideRight = {
    distance: '10%',
    origin: 'right',
    delay: 800,
    duration: 2000,
    easing: 'ease',
    opacity: 0,
    reset: false
};
ScrollReveal().reveal('.slide-right', slideRight);

var slideLeft = {
    distance: '10%',
    origin: 'left',
    delay: 700,
    duration: 2000,
    easing: 'ease',
    opacity: 0,
    reset: false
};
ScrollReveal().reveal('.slide-left', slideLeft);

$(document).ready(function() {

    // var servicesHeroText = $(".services-hero-text");
    // var itLaw = $(".it-law");
    // var consultancyLaw = $(".consultancy-law");
    // var familyLaw = $(".family-law");
    // var criminalLaw = $(".criminal-law");
    // var webLaw = $(".web-lav");
    // var estateLaw = $(".estate-law");
    
    


});


