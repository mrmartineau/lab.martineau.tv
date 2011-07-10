$(document).ready(function() {
	//comment...easy
	$('textarea').bind('blur keyup',function() {
		var txt = $('#input').val();
        txt = '<p><span>' + txt.split('\n').join('</p><p>') + '</p>';
        txt = txt.split(' ').join('</span> <span>') + '</span>';
        $('#result_content').html(txt);
	});/* /.bind */
	var number = 0;
	function incrementNumber () {
	    number += 1;
	}
	$('#result_content span').live('click', function(){
		$(this).addClass('selected').clone().text($(this).text() + ' ').appendTo('#keyword_content');
		incrementNumber();
		$(this).text('__________(' + number + ')');
	});
});
