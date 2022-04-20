if (
  localStorage.getItem("menApparelProgress") == 100 &&
  localStorage.getItem("womenApparelProgress") == 100
) {
  $(".step1").removeClass("step-active");
  $(".step1").addClass("step-completed");
  $(".step2").addClass("step-active");
  //   Step Two
  if (localStorage.getItem("quizProgress") == 100) {
    $(".step2").removeClass("step-active");
    $(".step2").addClass("step-completed");
    $(".step3").addClass("step-active");
  }
  //   Step Three
  if (localStorage.getItem("kitProgress") == 100) {
    $(".step3").removeClass("step-active");
    $(".step3").addClass("step-completed");
    $(".step4").addClass("step-active");
  }
  if (
    localStorage.getItem("menApparelProgress") == 100 &&
    localStorage.getItem("womenApparelProgress") == 100 &&
    localStorage.getItem("quizProgress") == 100 &&
    localStorage.getItem("kitProgress") == 100 &&
    localStorage.getItem("tasbeehProgress") == "completed"
  ) {
    $(".step4").removeClass("step-active");
    $(".step4").addClass("step-completed");
    // show tasbeehProgressbar 
    $(".step5").addClass("step-completed");
  }
}
