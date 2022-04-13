var menApperalProgress;
var womenApperalProgress;
var quizProgress;
var kitProgress;

function setItems() {
    if (localStorage.getItem('menApparelProgress') && localStorage.getItem('womenApparelProgress') && localStorage.getItem('quizProgress') && localStorage.getItem('kitProgress')) {
        return;
    } else {
        localStorage.setItem('menApparelProgress', 0)
        localStorage.setItem('womenApparelProgress', 0)
        localStorage.setItem('quizProgress', 0)
        localStorage.setItem('kitProgress', 0)
        localStorage.setItem('isItsSaved', false)
    }
}
function getItems() {
    menApperalProgress = localStorage.getItem('menApparelProgress')
    womenApperalProgress = localStorage.getItem('womenApparelProgress')
    quizProgress = localStorage.getItem('quizProgress')
    kitProgress = localStorage.getItem('kitProgress')
}

function setValues() {
    let menApperalProgressBar = $('#men-apperal-progress-bar');
    let womenApperalProgressBar = $('#women-apperal-progress-bar');
    let quizProgressBar = $('#quiz-progress-bar');
    let kitProgressBar = $('#kit-progress-bar');

    // Set Percentage
    percentageMenApperalProgress = parseInt(((menApperalProgress / 100) * 100), 10);
    percentageWomenApperalProgressBar = parseInt(((womenApperalProgress / 100) * 100), 10);
    percentageQuizProgressBar = parseInt(((quizProgress / 100) * 100), 10);
    percentageKitProgressBar = parseInt(((kitProgress / 100) * 100), 10);
    // Set html
    menApperalProgressBar.text(percentageMenApperalProgress + "% -  Men");
    womenApperalProgressBar.text(percentageWomenApperalProgressBar + "% - Women");
    quizProgressBar.text(percentageQuizProgressBar + "% - Quiz");
    kitProgressBar.text(percentageKitProgressBar + "% - Kit");
}

setItems();
getItems();
setValues();
