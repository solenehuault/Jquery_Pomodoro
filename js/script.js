/* * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * *
 * * YOUR CODE GOES HERE ! * *
 * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * */

var seconde = 1;
var minute = 0;
var timer;


//function chrono
function chrono(seconde, minute) {
	timer = setInterval(function() {
	console.log(seconde, minute);
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
	
	$("#play").attr("disabled", true);
	$("#pause").attr("disabled", false);
	$("#stop").attr("disabled", false);
};

function chrono_pause (seconde, minute, timer) {
	clearInterval(timer);
	$("#play").attr("disabled", false);
	$("#pause").attr("disabled", true);
	$("#stop").attr("disabled", false);
};

function chrono_stop(timer) {
	clearInterval(timer);
	seconde = 1;
	minute = 0;
	$(".time").text("0:00");
	$("#play").attr("disabled", false);
	$("#pause").attr("disabled", false);
	$("#stop").attr("disabled", true);
	
};



//function task/break
function startbreak() {
	
};

function taskdone() {
	if ($("#task").val() != "") {
		$("#done").prepend("<li class='list-group-item'><s>" + $("#task").val() + "</s></li>");
		$("#task").val("")
	}
};
