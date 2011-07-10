$(document).ready(function(){		
//Play/Pause
	$('#pause').hide();
	$('#play').live('click', function() {
		$(this).hide();
		$('#pause').show();
	});
	$('#pause').live('click', function() {
		$(this).hide();
		$('#play').show();
	});
//Volume	
	$('#vol_but').toggle(function () {
		$('#volume').addClass('clicked').css('width', 184);
	}, function () {
		$('#volume').removeClass('clicked').css('width', 34);
		$('#volume_slider').hide(0);
	});
	$("#slider").slider({
	    value:80,
	    min: 0,
	    max: 100,
	    step: 2,
	    slide: function(event, ui) {
			$("#amount").val(ui.value);
	    }
	});
	$('#volume').hover( function(){
	    $(this).addClass('hovered').animate({
	        width:'184'
	    }, 100, function(){
	        $('#volume_slider').show(0);
	    });
	}, function(){
	    if( $('#volume').hasClass('clicked') ) {
		
		} else {
			$(this).removeClass('hovered').animate({
			    width:'34'
			}, 100, function(){
			    $('#volume_slider').hide(0);
			});
		}		
	});
	$("#amount").val($("#slider").slider("value"));
//Resize
	$('#resize').toggle(function () {
		$(this).children('div').switchClass("sm", "lg", 0);
		$('#mediaplayer_wrapper').animate({
				width:'894'
		}, 100, 'easeInOutExpo' );
		$('#video').animate({
				height:'420'
		}, 100, 'easeInOutExpo' );
	}, function () {
		$(this).children('div').switchClass("lg", "sm", 0);
		$('#mediaplayer_wrapper').animate({
				width:'640'
		}, 100, 'easeInOutExpo' );
		$('#video').animate({
				height:'320'
		}, 100, 'easeInOutExpo' );
	});
//Maximise
	var fullscreen = $(window).width();
	$('#maximise').toggle(function () {
		$('<div id="modal"></div>').appendTo('body');
		$('#mediaplayer_wrapper').appendTo('#modal').addClass('fullscreen').animate({
				width: fullscreen - '80'
		}, 300, 'easeInOutExpo' );
		$(this).addClass('minimise');
		$('#video').animate({
				height:'600'
		}, 300, 'easeInOutExpo' );
		$('#resize').fadeOut('fast');
	}, function () {
		$('#mediaplayer_wrapper').animate({
				width: '640'
		}, 300, 'easeInOutExpo' ).appendTo('#player_shell').removeClass('fullscreen');
		$('#video').animate({
				height:'320'
		}, 300, 'easeInOutExpo' );
		$('#modal').remove();
		$('#resize').fadeIn();
		if( $('#resize div').hasClass('lg') ) {
			$('#resize').click();
		} else {
		    
		}
		$(this).removeClass('minimise');
	});
	/*
$(window).resize(function(){
        var h = $(window).height();
        var w = $(window).width();
        $("#mediaplayer_wrapper").css('height',(h < 1024 || w < 768) ? 500 : 400);
    });
*/
	/*
$(window).resize(function() {
  		$('#mediaplayer_wrapper').width()	.animate({
				width: fullscreen - '30'
		}, 300, 'easeInOutExpo' );
	});
*/

//PLayback Controls
	var video = document.getElementsByTagName('video')[0];
	//var video = $('#film')[0];

});