var seconde = 6;
var minute = 0;
var timer; //storage of setInterval
var nbr_pause = 0;
var having_a_break = true;

//button play : timer
function chrono() {
	timer = setInterval(function () {
		var temps = seconde < 10 ? minute + ":0" + seconde : minute + ":" + seconde;
		$(".time").text(temps);
		$("title").text(temps);
		
		if (seconde == 0 && minute == 0) {
			startbreak();
		}
		else {
			if (seconde == 0) {
				seconde = 59;
				minute--;
			}
			else {
				seconde--;
			}
		}
	}, 1000);
	$("#play").attr("disabled", true);
	$("#pause").attr("disabled", false);
	$("#stop").attr("disabled", false);
};

//button pause
function chrono_pause(timer) {
	clearInterval(timer);
	$("#play").attr("disabled", false);
	$("#pause").attr("disabled", true);
	$("#stop").attr("disabled", false);
};

//button stop
function chrono_stop(timer) {
	clearInterval(timer);
	seconde = 0;
	minute = 25;
	$(".time").text("00:00");
	$("#play").attr("disabled", false);
	$("#pause").attr("disabled", false);
	$("#stop").attr("disabled", true);
};

//Break of 5min after a session, every 4 break, a 20lin break
function startbreak() {
	if (having_a_break) {
		if (nbr_pause == 3) {
			minute = 20;
			nbr_pause = 0;
			having_a_break = false;
			alert("Have a long break!");
		}
		else {
			minute = 5;
			nbr_pause++;
			having_a_break = false;
			alert("Have a break.");
		}
	}
	else {
		minute = 25;
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