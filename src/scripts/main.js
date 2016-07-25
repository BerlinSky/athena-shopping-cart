import $ from 'jquery';
import Cleave from 'cleave.js';
// require('cleave.js/dist/addons/cleave-phone.{country}');
import 'chosen';

$(function () {

  $('.js-credit--default').css({ "display": "block" });

	const cleave = new Cleave('.js-dataInput--cardNum', {
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

	$(".js-selectCountry").chosen({
		max_selected_options: 1,
		width: "200px"
	})

	$(".js-selectState").chosen({
		max_selected_options: 1,
		width: "150px"
	})
		
	$('.chosen-container.chosen-container-single').css(
		{	
			// "width": "240px", 
			"font-size": "18px",
			"background-color": "#fff",
			"border": "1px solid #eee"
		}
	);

	$('.chosen-single').css(
		{"border": 0, "border-radius": 0}
	);

});

  
  




