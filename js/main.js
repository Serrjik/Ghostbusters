$(document).ready(function () {
	// Кнопка отображения мобильного меню.
	const mMenuBtn = $('.m-menu-button')
	// Мобильное меню.
	const mMenu = $('.m-menu')
	// Переключатели табов.
	const tab = $('.tab')

	// Переключение мобильного меню.
	mMenuBtn.on('click', function () {
		mMenu.toggleClass('active')
		$('body').toggleClass('no-scroll')
	})

	// Переключение табов.
	tab.on('click', function () {
		tab.removeClass('active')
		$(this).toggleClass('active')
		
		$('.tabs-content').removeClass('visible')
		let activeTabContent = $(this).attr('data-target')
		$(activeTabContent).toggleClass('visible')
	})

	//initialize swiper when document ready
	var mySwiper = new Swiper ('.swiper-container', {
		loop: true,
		slidesPerView: 1,
		spaceBetween: 25,
		// Responsive breakpoints
		breakpoints: {
			769: {
				slidesPerView: 2
			},
			993: {
				slidesPerView: 4
			}
		},
		navigation: {
			nextEl: '.button-next'
		}
	})
})