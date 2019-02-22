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
		  adaptiveHeight: true,
		  responsive: [
	    {
	      breakpoint: 1133,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrow: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrow: false,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrow: false,
	        dots: true
	      }
	    }
	  	]
	});
//     var dots = $('.carousel__item');
// 	//вешаем обработчик на наши точки
// 	dots.click(function(){
// 		var $this = $(this);
// 		dots.removeClass('before after');
// 		//отображаем 2 предыдущие точки
// 		$this
// 			.prev().addClass('before')
// 			.prev().addClass('before');
// 		//отображаем 2 следующие точки
// 		$this
// 			.next().addClass('after')
// 			.next().addClass('after');

	
// 	  //если мы в самом начале - добавляем пару последующих точек
// 		if(!$this.prev().length) {
// 	  	$this.next().next().next()
// 		  	.addClass('after').next()
// 			  .addClass('after');
//   	}
// 		//на 2й позиции - добавляем одну точку
// 	  if(!$this.prev().prev().length) {
//   		$this.next().next().next()
// 	  	  .addClass('after');
//   	}
// 		//в самом конце - добавляем пару доп. предыдущих точек
// 		if(!$this.next().length) {
// 			$this.prev().prev().prev()
// 				.addClass('before').prev()
// 				.addClass('before');
// 		}
// 		//предпоследний элемента - добавляем одну пред. точку
// 		if(!$this.next().next().length) {
// 			$this.prev().prev().prev()
// 				.addClass('before');
// 		}	
// });
// mask input phone

  // $(".phone").mask("+7(999) 999-9999");

	/*========================
  	fancy
  	=========================*/
	$('.fancy-wrap a').fancybox({ 
	  animationEffect : 'fade'
	}).attr('data-fancybox', 'group1');


	// Inline popups
	$('.inline-popups').magnificPopup({
	  delegate: 'a',
	  removalDelay: 500, //delay removal by X to allow out-animation
	  callbacks: {
	    beforeOpen: function() {
	       this.st.mainClass = this.st.el.attr('data-effect');
	    }
	  },
	  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
	});

	// Hinge effect popup
	$('a.hinge').magnificPopup({
	  mainClass: 'mfp-with-fade',
	  removalDelay: 1000, //delay removal by X to allow out-animation
	  callbacks: {
	    beforeClose: function() {
	        this.content.addClass('hinge');
	    }, 
	    close: function() {
	        this.content.removeClass('hinge'); 
	    }
	  },
	  midClick: true
	});

	wow = new WOW(
     {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       false,       // default
      live:         true        // default
    }
    )
    wow.init();

});







 

