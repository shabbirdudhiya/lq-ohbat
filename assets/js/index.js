var menApperalProgress;
var womenApperalProgress;
var quizProgress;
var kitProgress;
var tasbeehProgress;
function setItems() {
  if (
    localStorage.getItem("menApparelProgress") &&
    localStorage.getItem("womenApparelProgress") &&
    localStorage.getItem("quizProgress") &&
    localStorage.getItem("kitProgress") &&
    localStorage.getItem("showModal")
  ) {
    return;
  } else {
    localStorage.setItem("menApparelProgress", 0);
    localStorage.setItem("womenApparelProgress", 0);
    localStorage.setItem("quizProgress", 0);
    localStorage.setItem("kitProgress", 0);
    localStorage.setItem("isItsSaved", false);
    localStorage.setItem("showModal", true);
  }
}
function getItems() {
  menApperalProgress = localStorage.getItem("menApparelProgress");
  womenApperalProgress = localStorage.getItem("womenApparelProgress");
  quizProgress = localStorage.getItem("quizProgress");
  kitProgress = localStorage.getItem("kitProgress");
  tasbeehProgress = localStorage.getItem("tasbeehProgress");
}

function setValues() {
  let menApperalProgressBar = $("#men-apperal-progress-bar");
  let womenApperalProgressBar = $("#women-apperal-progress-bar");
  let quizProgressBar = $("#quiz-progress-bar");
  let kitProgressBar = $("#kit-progress-bar");
  let tasbeehProgressBar = $("#tasbeeh-progress-bar");

  // Set Percentage
  percentageMenApperalProgress = parseInt((menApperalProgress / 100) * 100, 10);
  percentageWomenApperalProgressBar = parseInt((womenApperalProgress / 100) * 100,10);
  percentageQuizProgressBar = parseInt((quizProgress / 100) * 100, 10);
  percentageKitProgressBar = parseInt((kitProgress / 100) * 100, 10);
  
  // Set html
  menApperalProgressBar.text(percentageMenApperalProgress + "% -  Mard");
  womenApperalProgressBar.text(percentageWomenApperalProgressBar + "% - Bairo");
  quizProgressBar.text(percentageQuizProgressBar + "% - Amal");
  kitProgressBar.text(percentageKitProgressBar + "% - Jholnu");

  // Set Progress bar
  menApperalProgressBar.css("width",percentageMenApperalProgress + "%");
  womenApperalProgressBar.css("width",percentageWomenApperalProgressBar + "%");
  quizProgressBar.css("width",percentageQuizProgressBar + "%");
  kitProgressBar.css("width", percentageKitProgressBar + "%");

if (tasbeehProgress == "completed") { 
  tasbeehProgressBar.text('100' + "% - Tasbeeh");
  tasbeehProgressBar.css("width",'100' + "%");
}
}

function showJumbotorn() {
  if (
    menApperalProgress == 100 &&
    womenApperalProgress == 100 &&
    quizProgress == 100 &&
    kitProgress == 100 &&
    tasbeehProgress == "completed"
  ) {
    $(".jumbotron-section").show();
  }
}


setItems();
getItems();
setValues();
showJumbotorn();
