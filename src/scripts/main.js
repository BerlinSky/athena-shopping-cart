import $ from 'jquery';
import 'chosen';

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

	$(".chosenSelect").chosen({
		max_selected_options: 1
	})

});

  
  




