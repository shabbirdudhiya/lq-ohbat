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
    localStorage.getItem("kitProgress")
  ) {
    return;
  } else {
    localStorage.setItem("menApparelProgress", 0);
    localStorage.setItem("womenApparelProgress", 0);
    localStorage.setItem("quizProgress", 0);
    localStorage.setItem("kitProgress", 0);
    localStorage.setItem("isItsSaved", false);
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

  // Set Percentage
  percentageMenApperalProgress = parseInt((menApperalProgress / 100) * 100, 10);
  percentageWomenApperalProgressBar = parseInt(
    (womenApperalProgress / 100) * 100,
    10
  );
  percentageQuizProgressBar = parseInt((quizProgress / 100) * 100, 10);
  percentageKitProgressBar = parseInt((kitProgress / 100) * 100, 10);

  // if (percentageMenApperalProgress == 0) {
  //   menApperalProgressBar.text("Men");
  //   // menApperalProgressBar.css("width", "100" + "%");
  // } else {
  //   menApperalProgressBar.text(percentageMenApperalProgress + "% -  Men");
  //   menApperalProgressBar.css("width", percentageMenApperalProgress + "%");
  // }

  // if (percentageWomenApperalProgressBar == 0) {
  //   womenApperalProgressBar.text("Women");
  //   // womenApperalProgressBar.css("width", "100" + "%");
  // } else {
  //   womenApperalProgressBar.text(
  //     percentageWomenApperalProgressBar + "% - Women"
  //   );
  //   womenApperalProgressBar.css(
  //     "width",
  //     percentageWomenApperalProgressBar + "%"
  //   );
  // }

  // if (percentageQuizProgressBar == 0) {
  //   quizProgressBar.text("Quiz");
  //   // quizProgressBar.css("width", "100" + "%");
  // } else {
  //   quizProgressBar.text(percentageQuizProgressBar + "% - Quiz");
  //   quizProgressBar.css("width", percentageQuizProgressBar + "%");
  // }

  // if (percentageKitProgressBar == 0) {
  //   kitProgressBar.text("Kit");
  //   // kitProgressBar.css("width", "10" + "%");
  // } else {
  //   kitProgressBar.text(percentageKitProgressBar + "% - Kit");
  //   kitProgressBar.css("width", percentageKitProgressBar + "%");
  // }

  // Set html
  menApperalProgressBar.text(percentageMenApperalProgress + "% -  Men");
  womenApperalProgressBar.text(percentageWomenApperalProgressBar + "% - Women");
  quizProgressBar.text(percentageQuizProgressBar + "% - Quiz");
    kitProgressBar.text(percentageKitProgressBar + "% - Kit");

  // Set Progress bar
  menApperalProgressBar.css("width",percentageMenApperalProgress + "%");
  womenApperalProgressBar.css("width",percentageWomenApperalProgressBar + "%");
  quizProgressBar.css("width",percentageQuizProgressBar + "%");
  kitProgressBar.css("width", percentageKitProgressBar + "%");
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
