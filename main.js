var clockDisplay = document.getElementsByClassName("clock");
var backgroundDisplay = document.getElementsByClassName('clockcontainer');




function showTime () {
  var date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
    if (sec < 10) {
      sec = "0" + sec;
    };
    if (hr < 10) {
      hr = "0" + hr;
    };
    if (min < 10) {
      min = "0" + min;
    };
  clockDisplay[0].innerHTML = hr + ":" + min + ":" + sec;

};

var changeTime = setInterval(showTime, 1000);
