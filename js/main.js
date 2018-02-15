$(document).ready(function() {

	var link_left_aside = $('.header .link-left-aside'),
	    link_right_aside = $('.header .link-right-aside'),
	    close_left_aside = $('.section-content .left-aside .close'),
	    close_right_aside = $('.section-content .right-aside .close');

	$(link_left_aside).on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('.section-content').find('.left-aside').addClass('open');
	});

	$(link_right_aside).on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$('.section-content').find('.right-aside').addClass('open');
	});

  closeAsides(close_left_aside);
  closeAsides(close_right_aside);

	function closeAsides(close_link) {
		$(close_link).on('click', function(e) {
			e.preventDefault();
			e.stopPropagation();
			$(this).parents('.aside-block').removeClass('open');
		});
	}

	$(window).scroll(function() { 
	  var document_position = $(document).scrollTop(),
	      element_position = $('#page .content .right-content').offset().top - 45;
	  if (document_position > element_position) $('#page .content .right-content').addClass('fixed');
	  else $('#page .content .right-content').removeClass('fixed');
	 });

	$('.header .mob-burger').on('click', function(e) {
		e.stopPropagation();
		e.preventDefault();
		$(this).toggleClass('open').prev().toggleClass('open');
	})
});