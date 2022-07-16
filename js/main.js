// window.setInterval('refresh()', 10000);

let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let resetButton = document.getElementById("resetButton");
let durationDisplay = document.getElementById("durationDisplay");

// Constructor function
function StopWatch() {
  // Private variables
  let startTime,
    endTime,
    running,
    duration,
    minutes,
    seconds,
    hundredths = 0;

  this.start = function () {
    // Method to start the timer
    if (running) {
      throw new Error("Stopwatch has already started!");
    } else {
      running = true;
      console.log("Stopwatch Started");
      startTime = new Date();
      window.setInterval(this.timeUpdate, 1000);
    }
  };

  this.stop = function () {
    // Method to stop the timer
    if (!running) {
      throw new Error("Stopwatch is not started!");
    } else {
      running = false;
      console.log("Stopwatch Stopped");
      this.timeCalc;
      this.displayUpdate;
    }
  };

  this.reset = function () {
    // Method to reset all variables
    if (!running) {
      console.log("Stopwatch Reset");
      this.resetNums;
    } else {
      this.stop;
      console.log("Stopwatch Stopped and Reset");
      this.resetNums;
    }
  };

  this.resetNums = function () {
    console.log("All Variables Reset");
    startTime = 0;
    endTime = 0;
    running = false;
    duration = 0;
    minutes = 0;
    seconds = 0;
    hundredths = 0;
  };

  this.timeCalc = function () {
    endTime = new Date();
    duration = endTime.getTime() - startTime.getTime();
    console.log(duration);
    minutes = Math.floor(duration / 60000);
    console.log(minutes);
    seconds = ((duration % 60000) / 1000).toFixed(0);
    console.log(seconds);
    console.log(duration);
    hundredths = duration - seconds;
  };

  this.displayUpdate = function () {
    durationDisplay.innerHTML = `<span class="hundreds">${minutes}</span>:<span class="seconds">${
      seconds < 10 ? "0" : ""
    }${seconds}</span>:<span class="hundredths">${hundredths}</span>`;
  };

  Object.defineProperty(this, "duration", {
    // Getter for the duration variable
    get: function () {
      return duration;
    },
  });
  //
}

let casio = new StopWatch();

startButton.addEventListener("click", casio.start);
stopButton.addEventListener("click", casio.stop);
resetButton.addEventListener("click", casio.reset);
