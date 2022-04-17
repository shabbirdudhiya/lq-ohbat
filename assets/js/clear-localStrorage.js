let clearMenChecklist = $("#btn-clear-checklist-men").on("click", function () {
  if (clearMenChecklist) {
    $(".clear-msg").css("display", "block");
    $("#btn-clear-checklist-men").attr("disabled", true);

    // clear items
    localStorage.removeItem("plain-cloth");
    localStorage.removeItem("starch-cloth");
    localStorage.removeItem("cloth-button");
    localStorage.removeItem("without-pockets");
    localStorage.removeItem("bukhoor");
    localStorage.removeItem("starch-topi");
    localStorage.removeItem("namazi-topi");
    localStorage.removeItem("namazi-spectacles-men");
    localStorage.removeItem("nazami-taweez");
    localStorage.removeItem("nazami-socks-men");
    localStorage.removeItem("white-socks");
    localStorage.removeItem("menApparelProgress");
    localStorage.removeItem("menApparelNotApplicable");
    localStorage.setItem("menApparelProgress", 0);
    localStorage.setItem("isItsSaved", false);
  }
});

let clearWomenChecklist = $("#btn-clear-checklist-women").on(
  "click",
  function () {
    if (clearWomenChecklist) {
      $(".clear-msg").css("display", "block");
      $("#btn-clear-checklist-women").attr("disabled", true);

      // Clear items
      localStorage.removeItem("appropriate-fitting");
      localStorage.removeItem("namazi-jodi");
      localStorage.removeItem("mehndi");
      localStorage.removeItem("namazi-jewellery");
      localStorage.removeItem("namazi-spectacles");
      localStorage.removeItem("bengals-hairband");
      localStorage.removeItem("nazami-socks");
      localStorage.removeItem("womenApparelProgress");
      localStorage.removeItem("womenApparelNotApplicable");
      localStorage.setItem("womenApparelProgress", 0);
      localStorage.setItem("isItsSaved", false);
    }
  }
);

let clearQuiz = $("#btn-clear-quiz").on("click", function () {
  if (clearQuiz) {
    $(".clear-msg").css("display", "block");
    $("#btn-clear-quiz").attr("disabled", true);

    localStorage.removeItem("opt3");
    localStorage.removeItem("opt5");
    localStorage.removeItem("opt12");
    localStorage.removeItem("opt14");
    localStorage.setItem("quizProgress", 0);
    localStorage.setItem("isItsSaved", false);
  }
});

let clearKit = $("#btn-clear-kit").on("click", function () {
  if (clearQuiz) {
    $(".clear-msg").css("display", "block");
    $("#btn-clear-kit").attr("disabled", true);

    localStorage.removeItem("namazi-sujni-masallah");
    localStorage.removeItem("namazi-tasbeeh");
    localStorage.removeItem("namazi-rumaal");
    localStorage.removeItem("munajaat-shareefah");
    localStorage.removeItem("bihori-hafti");
    localStorage.removeItem("fajr-hafti");
    localStorage.removeItem("list-of-dua");
    localStorage.removeItem("nazr-al-maqam");
    localStorage.removeItem("najwa");
    localStorage.removeItem("qardanhasanah");
    localStorage.removeItem("faiz-al-mawaid-al-burhaniyah");
    localStorage.removeItem("tosho");
    localStorage.setItem("kitProgress", 0);
    localStorage.setItem("isItsSaved", false);
  }
});

let clearTasbeeh = $("#btn-clear-tasbeeh").on("click", function () {
  if (clearTasbeeh) {
    $(".clear-msg").css("display", "block");
    $("#btn-clear-tasbeeh").attr("disabled", true);
    localStorage.removeItem("tasbeehProgress");
  }
});
