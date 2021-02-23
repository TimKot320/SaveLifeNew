// Добавляем класс active 
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger, .header__container-link').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

