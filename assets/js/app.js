;(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	let handleTouchMoveNavigation = function (ev) {
		if (!$(ev.target).closest('#header-navigation').length) {
			ev.preventDefault();
		}
	}
	let handleHeaderMobile = () => {
		if (windowWidth < 992) {

		}
	}


	$(document).ready(function () {
		handleHeaderMobile();
	});

})
(jQuery);