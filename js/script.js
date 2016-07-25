/* * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * *
 * * YOUR CODE GOES HERE ! * *
 * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * */

var seconde = 6;
var minute = 0;
var timer;
var nbr_pause = 0;

//function chrono
function chrono() {
	timer = setInterval(function() {
		console.log("chrono: " + minute, seconde);
		if (seconde == 0 && minute == 0) {
			startbreak();
		}
		if (seconde == 0) {
			seconde = 59;
			minute--;
			$(".time").text(minute + ":" + seconde);
		}
		if (seconde < 10) {
			$(".time").text(minute + ":0" + seconde);
			seconde--;
		}
		else {
			$(".time").text(minute + ":" + seconde);
			seconde--;
		}
	}, 1000);
	
	$("#play").attr("disabled", true);
	$("#pause").attr("disabled", false);
	$("#stop").attr("disabled", false);
	console.log("chrono-sortie: " + minute, seconde);
};

function chrono_pause (timer) {
console.log("avt pause:" + minute, seconde);
	clearInterval(timer);
	console.log("pause:" + minute, seconde);
	$("#play").attr("disabled", false);
	$("#pause").attr("disabled", true);
	$("#stop").attr("disabled", false);
};

function chrono_stop(timer) {
	clearInterval(timer);
	seconde = 0;
	minute = 25;
	console.log("stop:" + minute, seconde);
	$(".time").text("0:00");
	$("#play").attr("disabled", false);
	$("#pause").attr("disabled", false);
	$("#stop").attr("disabled", true);
	
};



//function task/break
function startbreak() {
	seconde = 0;
	minute = 5;
};

function taskdone() {
	if ($("#task").val() != "") {
		$("#done").prepend("<li class='list-group-item'><s>" + $("#task").val() + "</s></li>");
		$("#task").val("")
	}
};
