var dribbble = null;

$(document).ready(function() {
	var username = $('#username'),
		user = $('span.user')	
		;
	dribbble = Tempo.prepare('dribbble').notify(function(event) {
		if (event.type === TempoEvent.Types.RENDER_STARTING || event.type === TempoEvent.Types.RENDER_COMPLETE) {
			$('div#dribbble').toggleClass('loading');
		}
	});

	/* !get function */
	function get(list) {
		theuser = username.val();
		dribbble.starting();
		$.getJSON("http://api.dribbble.com/shots/" + list + "?callback=?&per_page=30", function(data) {
			dribbble.render(data);
		});		
	}
	/* !getUser function */
	function getUserFollowing() {
		theuser = username.val();
		dribbble.starting();
		$.getJSON("http://api.dribbble.com/players/" + theuser + "/shots/following/?callback=?&per_page=30", function(data) {
			dribbble.render(data);
		});	
	}
	/* !getUser function */
	function getUserDribbbles() {
		theuser = username.val();
		dribbble.starting();
		$.getJSON("http://api.dribbble.com/players/" + theuser + "/shots/?callback=?&per_page=30", function(data) {
			dribbble.render(data);
		});	
	}
	/* !getUser function */
	/*
function getUserFollowers() {
		theuser = username.val();
		dribbble.starting();
		$.getJSON("http://api.dribbble.com/players/" + theuser + "/followers/shots/?callback=?", function(data) {
			dribbble.render(data);
		});	
	}
*/
	/* !getUser function */
	function getUserLikes() {
		dribbble.starting();
		$.getJSON("http://api.dribbble.com/players/" + theuser + "/shots/likes/?callback=?&per_page=30", function(data) {
			dribbble.render(data);
		});	
	}
	/* !Change Username */
	username.live('keyup',function() {        
        user.text( username.val() );
	});

	$('a.choose').click(function(event) {
		$('div#dribbble').html('');
		get(this.hash.substring(1));
	});
	
	/* Use current #hash or if window.location empty use 'popular' */
	get(window.location.hash !== null ? window.location.hash.substring(1) : 'popular');
	
	/* !Username Click */
	$('#dribbbles').click(function(){
		getUserDribbbles();
		return false;
	});
	$('#following').click(function(){
		getUserFollowing();
		return false;
	});
	$('#likes').click(function(){
		getUserLikes();
		return false;
	});
	
	/**********************
	 * Grid or List View  *
	 **********************/
	$('#layout_choice').click(function() {
		$('#dribbble ul.group').toggleClass('grid list');
		$(this).toggleClass('grid list');
		return false;
	});
	 
	/* !classChange function */
	/*
function classChange (elementToChange,initialClass,nextClass) {
		$(elementToChange).toggleClass(initialClass,nextClass);
		$(this).toggleClass('active').siblings().removeClass('active');
		return false;
	}
	$('#dribbble_nav a.layout_chooser').click(function() {
		classChange('#dribbble ul.group','.grid','.list');
	});
*/
});