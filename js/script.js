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
});

function wikiAlert(){
	alert('Hire me and we will both get famous and have our own WikiPedia page!');
};
