var seconde = 10;
var minute = 0;
var timer; //storage of setInterval
var nbr_pause = 0;
var having_a_break = true;

function chrono() {
	timer = setInterval(function () {
		if (seconde == 0) {
			seconde = 59;
			minute--;
		}
		else {
			seconde--;
		}
		var temps = seconde < 10 ? minute + ":0" + seconde : minute + ":" + seconde;
		$(".time").text(temps);
		if (seconde == 0 && minute == 0) {
			startbreak();
		}
	}, 1000);
	$("#play").attr("disabled", true);
	$("#pause").attr("disabled", false);
	$("#stop").attr("disabled", false);
};

function chrono_pause(timer) {
	clearInterval(timer);
	$("#play").attr("disabled", false);
	$("#pause").attr("disabled", true);
	$("#stop").attr("disabled", false);
};

function chrono_stop(timer) {
	clearInterval(timer);
	seconde = 0;
	minute = 25;
	$(".time").text("25:00");
	$("#play").attr("disabled", false);
	$("#pause").attr("disabled", false);
	$("#stop").attr("disabled", true);
};
//function task/break
function startbreak() {
	if (having_a_break) {
		if (nbr_pause == 3) {
			minute = 0;
			seconde = 20;
			having_a_break = false;
		}
		minute = 0;
		seconde = 5;
		nbr_pause++;
		console.log("nbr_pause: " + nbr_pause);
		having_a_break = false;
	}
	else {
		minute = 0;
		seconde = 10;
		having_a_break = true;
	}
};
//display the ongoing task in a the done table when the done button is clicked
function taskdone() {
	if ($("#task").val() != "") {
		$("#done").prepend("<li class='list-group-item'><s>" + $("#task").val() + "</s></li>");
		$("#task").val("")
	}
};