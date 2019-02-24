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


	// $("#form").submit(function() {
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "../mail.php",
	// 		data: $(this).serialize()
	// 	}).done(function() {
	// 		$(this).find("input").val("");
	// 		alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
	// 		$("#form").trigger("reset");
	// 	});
	// 	return false;
	// });
});



// Отправка заявки 
// $(document).ready(function() {
// 	$('#form').submit(function() { // проверка на пустоту заполненных полей. Атрибут html5 — required не подходит (не поддерживается Safari)
// 		if (document.form.name.value == '' || document.form.phone.value == '' ) {
// 			valid = false;
// 			return valid;
// 		}
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php",
// 			data: $(this).serialize()
// 		}).done(function() {
// 			$('.js-overlay-thank-you').fadeIn();
// 			$(this).find('input').val('');
// 			$('#form').trigger('reset');
// 		});
// 		return false;
// 	});
// });

// // Закрыть попап «спасибо»
// $('.js-close-thank-you').click(function() { // по клику на крестик
// 	$('.js-overlay-thank-you').fadeOut();
// });

// $(document).mouseup(function (e) { // по клику вне попапа
//     var popup = $('.popup');
//     if (e.target!=popup[0]&&popup.has(e.target).length === 0){
//         $('.js-overlay-thank-you').fadeOut();
//     }
// });


/* Article FructCode.com */
$( document ).ready(function() {
    $(".btn-modal").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'mail.php');
			return false; 
		}
	);
});
 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
        	$('#result_form').html('Телефон: '+result.phonenumber);
    	},
    	error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправленны.');
    	}
 	});
}
 

 

 

