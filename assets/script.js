//Run clock
currentTime()
setInterval(currentTime, 1000)


//Current Date and Time
function currentTime() {
    var currentTime = document.querySelector('#currentDay');
    var now = moment().format('dddd, MMMM Do YYYY, h:mm a');

    console.log(now) //check that it works

    currentTime.textContent = now
}


//show current time on the divs


setInterval(highlightTime, 60000) //calls by minute for clarity on console log
function highlightTime() {
    var hourNow = moment().format('hh')
    console.log(hourNow)

    var timeTableArray = [
        eightam = 08,
        nineam = 09,
        tenam = 10,
        elevenam = 11,
        twelvepm = 12,
        onepm = 01,
        twopm = 02,
        threepm = 03,
        fourpm = 04,
        fivepm = 05,
        sixpm = 06
    ]

    //compare real time and change div class so past, present, future class styles are visible
    if (hourNow === timeTableArray) {
        //if the time is current, change the p tag element to an input - <input class="col-8 time-block present" id="time-block">
    }
}


//show an enterable field for adding info




//Functional save button
var eventTextField = document.getElementsbyName('time-block-text').value
var timeBlock = document.getElementById('time-block')
var saveBtn = document.getElementById('saveBtn')
saveBtn.addEventListener('click', getEventText)

function getEventText() {
    // if (eventTextField === null) {
    //     alert("Oops! It looks like there wasn't anything entered.")
    // } else {
        //event.preventDefault();
        localStorage.setItem("time-block", eventTextField)
        //timeBlock.classList.add('hide')
        timeBlock.append('<p class="col-8 time-block present">' + "test text" + '</p>')
}

console.log(eventTextField)


