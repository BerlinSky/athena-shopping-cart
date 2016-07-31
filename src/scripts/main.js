import $ from 'jquery';
import Cleave from 'cleave.js';
import Select2 from 'select2';

$(function () {

	$('.js-couponCodeInput').hide();

	$('.js-couponCodeButton').click(function( event ) {
		$(event.target).hide();
		$('.js-couponCodeInput').show();
	});
	

  $('.js-credit--default').css({ "display": "block" });

  if ($('.js-dataInput--cardNum').length > 0) { 
    // it exists 
		const cleaveCardNum = new Cleave('.js-dataInput--cardNum', {
		  creditCard: true,
		  onCreditCardTypeChanged: function (type) {
		    console.log(type);

		    if (type === 'unknown') {
		      dimCardImages(false);
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

	function dimCardImages(dimFlag) {
		if (dimFlag) {
			$('.js-credit--amex').addClass('js-cardIcon__mask');
			$('.js-credit--visa').addClass('js-cardIcon__mask');
			$('.js-credit--mastercard').addClass('js-cardIcon__mask');
			$('.js-credit--discover').addClass('js-cardIcon__mask');
		}
		else {
	    $('.js-credit--amex').removeClass('js-cardIcon__mask');
	    $('.js-credit--visa').removeClass('js-cardIcon__mask');
	    $('.js-credit--mastercard').removeClass('js-cardIcon__mask');
	    $('.js-credit--discover').removeClass('js-cardIcon__mask');
		}
  }

	function dsiplayCardImages(type) {
    dimCardImages(true)

		const cardType = '.js-credit--' + type;
		$(cardType).removeClass('js-cardIcon__mask');
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

	$(".js-selectCountry").select2({ width: '100%' });

	$(".js-selectState").select2();

	$(".js-selectItemSize").select2({
		minimumResultsForSearch: Infinity
	});
});

  
  




