$(document).ready(function(e){
	$.getJSON('data.json', function(json){

		var articleHTML = $('#article').html();
		var articleTemplate = Handlebars.compile(articleHTML);

		$("#pageContainer").append(articleTemplate(json));
	});
});