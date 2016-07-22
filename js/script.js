/* * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * *
 * * YOUR CODE GOES HERE ! * *
 * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * */

var seconde = 0;
var minute = 0;


$("#play").click(function() {chrono(seconde, minute);});
$("#stop").click(function() {taskdone();});
if (minute == 25) { function() {}; }

	


function taskdone() {
	if ($("#task").val() != "") {
			$("#done").prepend("<li class='list-group-item'><s>" + $("#task").val() + "</s></li>");
			$("#task").val("")
		}
};

function chrono(seconde, minute) {
	setInterval(function() {
		if (seconde == 59) {
			seconde = 0;
			minute++;
			$(".time").text(minute + ":" + seconde);
		}
		seconde++;
		if (seconde < 10) {
			$(".time").text(minute + ":0" + seconde);
		}
		else {
			$(".time").text(minute + ":" + seconde);
		}
	}, 1000);
};
