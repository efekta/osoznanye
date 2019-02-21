;$(document).ready(function() {
	/*========================
	 fixed header
	 =======================*/
	$(window).scroll(function() {
		if($(this).scrollTop() >= 250) {
		$('.page-head').addClass('page-head_fixed');
	}
	else{
		$('.page-head').removeClass('page-head_fixed');
		}
	});
	/*========================
	 carousel
	 =======================*/
	$('.carousel').slick({
		  dots: false,
		  arrow: true,
		  nextArrow: '<img class="arrow arrow__next" src="icons/arrow.png">',
		  prevArrow: '<img class="arrow arrow__prev" src="icons/arrow_1.png">',
		  infinite: true,
		  speed: 500,
		  fade: true,
		  cssEase: 'linear',
		  // autoplay: true,
		  autoplaySpeed: 2000,
		  slidesToScroll: 1,
		  slidesToShow: 1,
		  adaptiveHeight: true
		  // responsive: [
	   //  {
	   //    breakpoint: 1133,
	   //    settings: {
	   //      slidesToShow: 1,
	   //      slidesToScroll: 1,
	   //      arrow: false,
	   //      dots: true
	   //    }
	   //  },
	   //  {
	   //    breakpoint: 600,
	   //    settings: {
	   //      slidesToShow: 1,
	   //      slidesToScroll: 1,
	   //      arrow: false,
	   //      dots: true
	   //    }
	   //  },
	   //  {
	   //    breakpoint: 480,
	   //    settings: {
	   //      slidesToShow: 1,
	   //      slidesToScroll: 1,
	   //      arrow: false,
	   //      dots: true
	   //    }
	   //  }
	  	// ]
	});

// mask input phone

  // $(".phone").mask("+7(999) 999-9999");

	/*========================
  	fancy
  	=========================*/
	$('.fancy-wrap a').fancybox({ 
	  animationEffect : 'fade'
	}).attr('data-fancybox', 'group1');


  	setTimeout(function() {
  		animationEffect : 'fade'
  		$('.modal').modal('show');}, 3000);


});







 

