/* =================================
    Preloader
===================================*/
$(window).on('load', function () {
	$("#status").fadeOut();
	$("#preloader").delay(350).fadeOut('slow');
});



$(function () {

	// team carusal
	$("#team-members").owlCarousel({
		items: 2,
		autoplay: true,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		dots: false,
	});


	$('#progress-elements').waypoint(function (direction) {
		$(".progress-bar").each(function () {
			$(this).animate({
				width: $(this).attr("aria-valuenow") + "%"
			}, 1000);
		});
		this.destroy();
	}, {
		offset: 'bottom-in-view'
	});


});

/* =================================
    Responsive Tabs
===================================*/
// work when document structure load 
$(function () {
	$('#services-tabs').responsiveTabs({
		animation: 'slide', // The panels will slide up and down
	});
});


/* =================================
    Portfolio
===================================*/

// first load imag and content 
$(window).on('load', function () {

	// init Isotope
	$('#isotop-container').isotope({});

	// filter items on button click
	$('#isotop-filters').on('click', 'button', function () {

		// get filter value 
		var filterValue = $(this).attr('data-filter');

		// filter portfolio
		$('#isotop-container').isotope({
			filter: filterValue
		});

		// active button
		$("#isotop-filters").find('.active').removeClass('active');
		$(this).addClass('active');

	});

});

/* =================================
    magnificPopup
===================================*/
$(function () {
	$('#portfolio-wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery: {
			enabled: true
		}
	});
});


/* =================================
    Testimonials
===================================*/

$(function () {
	$("#testimonial-slider").owlCarousel({
		items: 1,
		autoplay: false,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		dots: false,
	});
});

/* =================================
    Counter Up
===================================*/
$(function() {
	 $('.counter').counterUp({
         delay: 10,
         time: 2000,
     });
});

/* =================================
    Clients
===================================*/
$(function () {
	$("#client-list").owlCarousel({ 
		items: 6,
		autoplay: false,
		smartSpeed: 700,
		loop: true,
		autoplayHoverPause: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		dots: false,
	});
});


/* =================================
    Google Map
===================================*/
$(function() {
	var addressString = 'House Number 148, Road Number 3, Section 7, Mirpur, Dhaka, BD';
	
	var myLatLong = {lat:23.7966302, lng:90.3606038}; 
	
	// render 
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15, center: myLatLong
	});
	
  	// The marker, positioned at Uluru
  	var marker = new google.maps.Marker({position: myLatLong, map: map}); 
});

/* =================================
    Navigation
===================================*/
$(function() {
	
	// show/hide nav on page load 
	showHideNav(); 
	
	$(window).scroll(function() {
		// show/hide nav on page load 
		showHideNav(); 
	});
	
	// function 
	function showHideNav() {
		if( $(window).scrollTop() > 50 ) {
			// Show white nav
			$("nav").addClass('white-nav-top'); 
			
			// dark logo
			$('.navbar-brand img').attr("src", "img/logo/logo-dark.png");
		} else {
		    // Hide white nav 
			$("nav").removeClass('white-nav-top'); 
			// white logo
			$('.navbar-brand img').attr("src", "img/logo/logo.png");
		}
	}
	
});