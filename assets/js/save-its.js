
// getuserits
function getUserIts() {
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    console.log(ca[1]);
}

function saveUserIts() {
    // let userIts = getUserIts();
    let userIts = 50480062;

    if (localStorage.getItem('menApparelProgress') == 100 && localStorage.getItem('womenApparelProgress') == 100 && localStorage.getItem('quizProgress') == 100 && localStorage.getItem('kitProgress') == 100) {
        if (localStorage.getItem('isItsSaved') == "false") {
            var url = `https://script.google.com/macros/s/AKfycbwaKxVOZLVIEExCbtMknAwcwZK_i7JEM6Mu7sDtrBSFkaeRaQPeMg-vRvnVWJOiBTUr/exec?its=${userIts}`;
            $.get(url, function (data, status) { })
            localStorage.removeItem("isItsSaved");
            localStorage.setItem("isItsSaved", true);
        } else {
            console.log("its already saved");
        }
    } else {
        console.log("Not completed.");
    }

}
saveUserIts();