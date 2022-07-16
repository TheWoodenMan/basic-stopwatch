// window.setInterval('refresh()', 10000);

let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let resetButton = document.getElementById("resetButton");
let durationDisplay = document.getElementById("durationDisplay");

// Constructor function
function StopWatch() {
  // Private variables
  let startTime = 0,
    endTime = 0,
    running = 0,
    duration = 0,
    difference = 0,
    minutes = 0,
    seconds = 0,
    hundredths = 0;
  let intervalId;
  const self = this;

  this.start = function () {
    // Method to start the timer
    if (running) {
      throw new Error("Stopwatch has already started!");
    } else {
      self.startTimer();
    }
  };

  this.stop = function () {
    // Method to stop the timer
    if (!running) {
      throw new Error("Stopwatch is not started!");
    } else {
      self.stopTimer();
    }
  };

  this.startTimer = function () {
    //  Record start time, start Interval timer.
    running = true;
    console.log("Stopwatch Started");
    intervalId = setInterval(self.updateTime, 100);
    startTime = Date.now() - duration;
  };

  this.stopTimer = function () {
    // stop timer, calculate and assign the different times
    running = false;
    console.log("Stopwatch Stopped");
    clearInterval(intervalId);
    self.updateTime();
  };

  this.updateTime = function () {
    // All time calculations for display
    endTime = Date.now();
    duration = endTime - startTime;
    minutes = Math.floor(duration / 60000);
    seconds = ((duration % 60000) / 1000).toFixed(0);
    hundredths = (duration % 100).toFixed(0);
    self.displayUpdate();
  };

  this.displayUpdate = function () {
    // Update the html display
    durationDisplay.innerHTML = `<span class="hundreds">${
      minutes < 10 ? "0" : ""
    }${minutes}</span>:<span class="seconds">${
      seconds < 10 ? "0" : ""
    }${seconds}</span>:<span class="hundredths">${
      hundredths < 10 ? "0" : ""
    }${hundredths}</span>`;
  };

  this.reset = function () {
    // Method to execute a reset.
    if (!running) {
      console.log("Stopwatch Reset");
      self.resetNums();
    } else {
      self.stop;
      console.log("Stopwatch Stopped and Reset");
      self.resetNums();
    }
  };

  this.resetNums = function () {
    // reset all variables
    console.log("All Variables Reset");
    startTime = 0;
    endTime = 0;
    running = false;
    duration = 0;
    difference = 0;
    minutes = 0;
    seconds = 0;
    hundredths = 0;
    self.displayUpdate();
  };

  Object.defineProperty(this, "duration", {
    // Getter for the duration variable
    get: function () {
      return duration;
    },
  });
  //
  Object.defineProperty(this, "seconds", {
    // Getter for the duration variable
    get: function () {
      return seconds;
    },
  });
  //
  Object.defineProperty(this, "minutes", {
    // Getter for the duration variable
    get: function () {
      return minutes;
    },
  });
  //
  Object.defineProperty(this, "hundredths", {
    // Getter for the duration variable
    get: function () {
      return hundredths;
    },
  });
  //
}

let casio = new StopWatch();

startButton.addEventListener("click", casio.start);
stopButton.addEventListener("click", casio.stop);
resetButton.addEventListener("click", casio.reset);
