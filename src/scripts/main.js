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
  	dimCardImages(false);

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
			$('.js-credit--amex').hide();
			$('.js-credit--amex-mask').show();
			$('.js-credit--visa').hide();
			$('.js-credit--visa-mask').show();
			$('.js-credit--mastercard').hide();
			$('.js-credit--mastercard-mask').show();
			$('.js-credit--discover').hide();
			$('.js-credit--discover-mask').show();
		}
		else {
			$('.js-credit--amex').show();
			$('.js-credit--amex-mask').hide();
			$('.js-credit--visa').show();
			$('.js-credit--visa-mask').hide();
			$('.js-credit--mastercard').show();
			$('.js-credit--mastercard-mask').hide();
			$('.js-credit--discover').show();
			$('.js-credit--discover-mask').hide();
		}
  }

	function dsiplayCardImages(type) {
    dimCardImages(true)

		const cardType = '.js-credit--' + type;
		const cardTypeMask = '.js-credit--' + type + '-mask';
		$(cardType).show();
		$(cardTypeMask).hide();
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

  
  




