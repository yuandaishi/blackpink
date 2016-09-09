$(function() {
	var add = 0.05//(96-16)/(1920-320)
	var htmlWidth = $("html").width();
	var fontSize = (htmlWidth - 320) * add + 16;
	$("html").css({
		"font-size": fontSize
	})
	$(window).resize(function() {
		var add = 0.05 //(96-16)/(1920-320)
		var htmlWidth = $("html").width();
		var fontSize = (htmlWidth - 320) * add + 16;
		$("html").css({
			"font-size": fontSize
		})
	})
})

