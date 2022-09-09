$(document).ready(() => {
	$("td").click(function (event) {
	alert("Saat ini Anda mengklik " + $(this).html() +"!");
	});
	$("th").click(function (event) {
	alert("Saat ini Anda mengklik " + $(this).html() +"!");
	});
});