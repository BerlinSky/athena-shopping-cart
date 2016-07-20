import $ from 'jquery';

$(function () {

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

});

  
  




