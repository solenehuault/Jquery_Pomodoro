/* * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * *
 * * YOUR CODE GOES HERE ! * *
 * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * */

var seconde = 1;
var minute = 0;
var time_is_running = false;

function taskdone() {
	if ($("#task").val() != "") {
		$("#done").prepend("<li class='list-group-item'><s>" + $("#task").val() + "</s></li>");
		$("#task").val("")
	}
};

function chrono(time_is_running, seconde, minute) {
	$("#play").attr("disabled", true);
	var timer = setInterval(function() {
		if (seconde == 59) {
			seconde = 0;
			minute++;
			$(".time").text(minute + ":" + seconde);
		}
		if (seconde < 10) {
			$(".time").text(minute + ":0" + seconde);
			seconde++;
		}
		else {
			$(".time").text(minute + ":" + seconde);
			seconde++;
		}
	}, 1000);
};

function startbreak() {
	
};

function chrono_pause (seconde, minute, timer) {
	clearInterval(timer);
};
