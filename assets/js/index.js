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
// getuserits
// function getUserIts() {
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     console.log(ca[1]);
// }

function checkIfAllActivityIsDone() {
    if (localStorage.getItem('menApparelProgress') == 100
        && localStorage.getItem('womenApparelProgress') == 100
        && localStorage.getItem('quizProgress') == 100
        && localStorage.getItem('kitProgress') == 100) {
        console.log("completed");
    } else {
        console.log("notcompleted");
    }

}
checkIfAllActivityIsDone();
setItems();
getItems();
setValues();
