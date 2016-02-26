var count = 0;
function showModalWithCounter() {
	document.getElementById("seconds").innerHTML = count;		
	var incrementByOne = function() {
		count = count + 1;
		document.getElementById("seconds").innerHTML = count;	
	};
	intervalHandle = setInterval(incrementByOne, 1000); 
}
function clearCounter() {
	clearInterval(intervalHandle);
}
$( document ).ready(function() {
    document.getElementById("appends").innerHTML = 'This page was built from dynamic content at ' + dateString;
});

$(function(){

var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

  $('button[data-modal-id]').click(function(e) {
    e.preventDefault();
    $("body").append(appendthis);
    $(".modal-overlay").fadeTo(500, 0.7);
    //$(".js-modalbox").fadeIn(500);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());
  });  
  
  
$(".js-modal-close, .modal-overlay").click(function() {
  $(".modal-box, .modal-overlay").fadeOut(500, function() {
    $(".modal-overlay").remove();
	  clearCounter();
  });
});
 
$(window).resize(function() {
  $(".modal-box").css({
    top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
    left: ($(window).width() - $(".modal-box").outerWidth()) / 2
  });
});
 
$(window).resize();
 
});