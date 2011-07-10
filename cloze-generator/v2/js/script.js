//Randomise plugin
(function($) {

$.fn.randomize = function(childElem) {
  return this.each(function() {
      var $this = $(this);
      var elems = $this.children(childElem);

      elems.sort(function() { return (Math.round(Math.random())-0.5); });  

      $this.remove(childElem);  

      for(var i=0; i < elems.length; i++)
        $this.append(elems[i]);      

  });    
}
})(jQuery);

$(document).ready(function() {
	$('#placeholders a').click(function() {
		var thisText =	$(this).attr('data-text');
		$('textarea').text(thisText).keyup();
		return false;
	});
	//Textarea move to result box
	$('textarea').bind('keyup',function() {        
        $('#result_content').text($('textarea').val());
        $('#result_content')
        	.html('<span>'+$('#result_content')
                .html().replace(/( |"|\(|\)|\[|\]|'|:|;|\?|\!|\/|\/\/ |, |\.)/g,'</span>$1<span>').replace(/\n/g,'</span><br /><br /><span>')+'</span>')
	});
	
	//Increment number
	var number = 0;
	function incrementNumber () {
	    number += 1;
	}
	
	//Click spans in result box
	$('#result_content span').live('click', function(){
		var
			thisTxt = $(this).text()
			inputWidth = $(this).width();
		;
		if ( $(this).children().size() > 0 ) {
			//Need to match word, add a success message (tick maybe) & then replace input with correct text that is highlighted.
		} else {
		    incrementNumber();
			$(this).attr({id: 'item' + number}).addClass('selected').clone().text($(this).text() + ' ').appendTo('#keyword_content');
			$(this).html('<input type="text" placeholder="?"/>').find('input').attr({name: thisTxt}).css('width', inputWidth).data('data-text', thisTxt);
		}
	});
	//Move words back to result box
	$('#keyword_content span').live('click', function() {
		var thisClass = $(this).attr('id');
		var thatClass = 'span#' + thisClass;
		//alert(thatClass)
		var thisTxt = $(this).text();
		//alert(thisTxt)
		$('#result_content').find(thatClass).replaceWith('<span>' + thisTxt + '</span>');
		$(this).fadeOut('slow').remove();
	});
	
	//Randomise
	$('#keywords button').click(function() {
		$('#keyword_content').randomize("#keyword_content span");
	});
	//Select text
	/*
$('button#select').live('click',function() {
		$('#result_content').select();
	});
*/
	
});

// To do:
// 1. Enter a url or paste in your own text.
// 2. 
