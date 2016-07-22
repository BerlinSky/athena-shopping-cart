import $ from 'jquery';
import 'chosen';
// import 'card';

$(function () {

	// $('form').card({
 //    container: '.card-wrapper', // *required* 
	// });

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

  
  




