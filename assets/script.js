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

//show current time on the divs

function currentTimeBlock() {
  const baseTime = 8;

  var timeBlockEl = document.getElementsbyClassName("time-block");
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
    } else if (currentHour > ScheduleHour) {
      scheduleBlockClass.toggle("past", true);
      scheduleBlockClass.toggle("present", false);
    } else {
      scheduleBlockClass.toggle("present", true);
      scheduleBlockClass.toggle("future", false);
    }
  }
}

//show an enterable field for adding info
//Functional save button
var eventTextField = document.getElementsByName("time-block-text").value;
var timeBlock = document.getElementById("time-block");
var saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", getEventText);

function getEventText() {
  // if (eventTextField === null) {
  //     alert("Oops! It looks like there wasn't anything entered.")
  // } else {
  //event.preventDefault();
  var eventText = localStorage.setItem("time-block", eventTextField);
  //timeBlock.classList.add('hide')
  timeBlock.append('<p class="col-8 time-block present">' + eventText + "</p>");
}

console.log(eventTextField);
