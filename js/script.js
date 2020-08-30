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