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
	 mob menu
	 =======================*/
	$(".menu-toggle").on('click', function() {
		$(this).toggleClass("on");
		$('.main-nav__list').toggleClass("show");
		$('body').toggleClass('overflow');
	});
	jQuery(window).width() <= 991 && $(".main-nav__list li").on('click', function() {
		$('.menu-toggle').removeClass("on");
		$('.main-nav__list').removeClass("show");
		$('body').removeClass('overflow');
  	});
  	/*================================
	 Плавный скролл до якоря jquery
	=================================*/
	$("body").on('click', '[href*="#"]', function(e){
	  var fixed_offset = 100;
	  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
	  e.preventDefault();
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
	/*========================
	 mask input phone
	=========================*/
  $(".phone").mask("+7(999) 999-9999");

	/*========================
  	 fancy
  	=========================*/
	$('.fancy-wrap a').fancybox({ 
	  animationEffect : 'fade'
	}).attr('data-fancybox', 'group1');

	/*========================
	 Inline popups
	=========================*/
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
	/*========================
	wow 
	=========================*/
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
		
	/*Работа с формой*/

	function successHandler(){
		// Здесь можно выводить модалку
		console.log("success");
	}

	// Прописываем форму в переменную
	var form = $("#ajax_form");

	// Обработка сабмита формы
	form.on('submit', function(e){
		e.preventDefault();
		// Ищем нужные инпуты
		var phone = form.find('input[name=phone]').val();
		$.ajax({
				type: "POST",
				url: "mail.php",
				data: {
					form_phone: phone
				},
				success: successHandler()
		});
		return false;
	});

});





 

 

