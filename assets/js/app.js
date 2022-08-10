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
			let elmBody = $('body'),
				elmOverlay = $('#header-overlay'),
				elmToggleNavigation = $('#hamburgerIcon');

			elmToggleNavigation.click(function () {
				if (elmBody.hasClass('navigation-show')) {
					elmBody.attr({
						'class': '',
						'style': ''
					});
					document.removeEventListener('touchmove', handleTouchMoveNavigation);
				} else {
					document.addEventListener('touchmove', handleTouchMoveNavigation, {passive: false});
					elmBody.attr({
						'class': 'navigation-show',
						'style': 'overflow-y: hidden'
					});
				}
			});

			elmOverlay.click(function () {
				elmToggleNavigation.trigger('click');
			});
		}
	}

	let handleDropdownBanner = function () {
		if ($('.initDropdown').length) {
			$('.initDropdown .initDropdown-btn').click(function () {
				let btn = $(this),
					elmParent = btn.parent();
				if (elmParent.hasClass('is-show')) {
					elmParent.removeClass('is-show');
				} else {
					if ($('.initDropdown').hasClass('is-show')) {
						$('.initDropdown').removeClass('is-show')
					}
					elmParent.addClass('is-show');
				}
			});

			$('.initDropdown .initDropdown_value').click(function () {
				let btn = $(this),
					value = btn.html(),
					elmParent = btn.parents('.initDropdown'),
					step = parseInt(elmParent.data('step')) + 1;

				elmParent.removeClass('is-show');
				elmParent.children('.initDropdown-btn').html(value).addClass('is-value');

				elmParent.find('.initDropdown_value').removeClass('is-active');
				btn.addClass('is-active');

				$('.initDropdown[data-step=' + step + ']').addClass('is-show')
			});

			$(document).on('mouseup', function (event) {
				let targetElm = $(".initDropdown.is-show");
				targetElm.is(event.target) || 0 !== targetElm.has(event.target).length || (
					targetElm.removeClass('is-show'))
			});
		}
	};

	let handleSlider = function () {
		if ($('#slider-hero .swiper').length) {
			new Swiper('#slider-hero .swiper', {
				speed: 500,
				autoplay: {
					delay: 10000,
					disableOnInteraction: !1,
				},
				pagination: {
					el: '#slider-hero .swiper-pagination',
					clickable: 1,
				},
				allowTouchMove: !1,
				loop: 1,
			});
		}
	}

	$(document).ready(function () {
		handleHeaderMobile();
		handleDropdownBanner();
		handleSlider();
	});

})
(jQuery);