$(function(){

	var imp = impress();

	$('#arrowLeft').click(function(e){
		imp.prev();
		e.preventDefault();
	});

	$('#arrowRight').click(function(e){
		imp.next();
		e.preventDefault();
	});

	$("#mail_btn").click(function(){
			$("#mail_p").toggle();
	});
});
