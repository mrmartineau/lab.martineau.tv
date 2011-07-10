$(document).ready(function() {
	var zootool = Tempo.prepare('zootool').notify(function(event) {
		if (event.type === TempoEvent.Types.RENDER_STARTING || event.type === TempoEvent.Types.RENDER_COMPLETE) {
			$('#shots').toggleClass('loading');
		}
	});
	zootool.starting();
	$.getJSON("http://zootool.com/api/users/items/?username=mrmartineau&apikey=0f674444c3282b138f27e3526d6a0fc6", function(data) {
		zootool.render(data.results);
	});
	
	/**********************
	 * Grid or List View  *
	 **********************/
	$('#layout_choice').click(function() {
		$('#dribbble ul.group').toggleClass('grid list');
		$(this).toggleClass('grid list');
		return false;
	});
});