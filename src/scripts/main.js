import $ from 'jquery';
import Cleave from 'cleave.js';
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
	    datePattern: ['m', 'y'],
	    delimiter: '/'
		});
	}

	if ($('.js-dataInput--cardCVCode').length > 0) { 
		const cleaeveCardCvCode = new Cleave('.js-dataInput--cardCVCode', {
	    numeral: true,
	    delimiter: ''
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
});

  
  




