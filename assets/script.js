//Run clock
currentTime();
//Run getting the timeblock
setInterval(currentTimeBlock, 1000);

//Current Date and Time
function currentTime() {
  var currentTime = document.querySelector("#currentDay");
  var now = moment().format("dddd, MMMM Do YYYY, h:mm a");

  //console.log(now); //check that it works

  currentTime.textContent = now;
}

//setInterval(currentTimeBlock, 60000); //calls by minute for clarity on console log

//show current time on the divs - https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle

function currentTimeBlock() {
  const baseTime = 8;

  var timeBlockEl = document.getElementsByClassName("time-block");
  var timeBlockCount = timeBlockEl.length;
  var timeSegments = new Array(timeBlockCount);

  console.log(timeBlockCount);

  // getting the current time
  var currentTime = new Date();
  var currentHour = currentTime.getHours();

  for (var i = 0; i < timeBlockCount; i++) {
    timeSegments[i] = baseTime + i;
  }

  for (var j = 0; j < timeBlockCount; j++) {
    var scheduleHour = timeSegments[j];
    var scheduleBlockClass = timeBlockEl[j].classList;

    if (currentHour < scheduleHour) {
      scheduleBlockClass.toggle("future", true);
      scheduleBlockClass.toggle("time-block-text", true);
    } else if (currentHour > scheduleHour) {
      scheduleBlockClass.toggle("past", true);
      scheduleBlockClass.toggle("present", false);
      scheduleBlockClass.toggle("unavailable", true);
    } else {
      scheduleBlockClass.toggle("present", true);
      scheduleBlockClass.toggle("time-block-text", true);
      scheduleBlockClass.toggle("future", false);
    }
  }
}

//show an enterable field for adding info
// jquery for input
var timeBlockText = $(".time-block-text").val();
console.log(timeBlockText);
//var saveBtn = document.getElementById("saveBtn");

function saveEvent() {
  localStorage.setItem("event", JSON.stringify(timeBlockText));
}

// use jquery click function
$(".saveBtn").click(function () {
  saveEvent();
});
