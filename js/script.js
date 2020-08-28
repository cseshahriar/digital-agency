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
$(function () {
	$('#services-tabs').responsiveTabs({
		animation: 'slide', // The panels will slide up and down
	});
});