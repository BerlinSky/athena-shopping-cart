import $ from 'jquery';
import Cleave from 'cleave.js';
// require('cleave.js/dist/addons/cleave-phone.{country}');
// import 'chosen';
import Select2 from 'select2';

$(function () {

  $('.js-credit--default').css({ "display": "block" });

  if ($('.js-dataInput--cardNum').length > 0) { 
    // it exists 
		const cleaveCardNum = new Cleave('.js-dataInput--cardNum', {
		  creditCard: true,
		  onCreditCardTypeChanged: function (type) {
		    console.log(type);

		    if (type === 'unknown') {
		      dsiplayCardImages("default");
		    }
		    else {
		      dsiplayCardImages(type);
		    }
		  }
		});
	}

  if ($('.js-dataInput--cardExpDate').length > 0) { 
		const cleaeveCardDate = new Cleave('.js-dataInput--cardExpDate', {
	    date: true,
	    datePattern: ['m', 'Y'],
	    delimiter: '/'
		});
	}

	function dsiplayCardImages(type) {
    $('.js-credit--amex').hide();
    $('.js-credit--visa').hide();
    $('.js-credit--mastercard').hide();
    $('.js-credit--discover').hide();
		$('.js-credit--default').hide();

		const cardType = '.js-credit--' + type;
		$(cardType).show();
	}

	$('.dataForm__section .inputGroup input').focusout((event) => {
		const input = $(event.target);
	  const textVal = input.val();
	  if(textVal === "") {
	    input.removeClass('js-userData');
	  } 
	  else {
	    input.addClass('js-userData');
	  } 
	});

	$(".js-selectCountry").select2();

	$(".js-selectState").select2();

	$(".js-selectItemSize").select2({
		minimumResultsForSearch: Infinity
	});



	// $(".js-selectCountry").chosen({
	// 	max_selected_options: 1,
	// 	width: "200px"
	// })

	// $(".js-selectState").chosen({
	// 	max_selected_options: 1,
	// 	width: "150px"
	// })
		
	// $('.chosen-container.chosen-container-single').css(
	// 	{	
	// 		// "width": "240px", 
	// 		"font-size": "18px",
	// 		"background-color": "#fff",
	// 		"border": "1px solid #eee"
	// 	}
	// );

	// $('.chosen-single').css(
	// 	{"border": 0, "border-radius": 0}
	// );

});

  
  




