// sticky header
$(window).load(function(){
	$("header").sticky({ topSpacing: 0, className: 'sticky', wrapperClassName: 'header-wrapper' });
});

$(document).ready(function() {
 
 // panel scroll (nav menu highlight)
 $('#nav').onePageNav();
 $("#rsvp").click(function(){
$('html,body').scrollTo('#menu6','slow');
});
 
 // Photo gallery 
 $("a[rel^='photo']").prettyPhoto()
});