$(document).ready(function () {

    var option_1 = document.getElementById('opt1');
    var option_2 = document.getElementById('opt2');
    var option_3 = document.getElementById('opt3');
    var option_4 = document.getElementById('opt4');
    var option_5 = document.getElementById('opt5');
    var option_6 = document.getElementById('opt6');
    var option_7 = document.getElementById('opt7');
    var option_8 = document.getElementById('opt8');
    var option_9 = document.getElementById('opt9');
    var option_10 = document.getElementById('opt10');
    var option_11 = document.getElementById('opt11');
    var option_12 = document.getElementById('opt12');
    var option_13 = document.getElementById('opt13');
    var option_14 = document.getElementById('opt14');
    var option_15 = document.getElementById('opt15');
    var option_16 = document.getElementById('opt16');

    var options = [option_1, option_2, option_3, option_4, option_5, option_6, option_7, option_8, option_9, option_10, option_11, option_12, option_13, option_14, option_15, option_16];
    var correctOptions = [option_3.id, option_5.id, option_12.id, option_14.id];
    var selectedOptions = [];
    $('#submit-quiz').click(function () {
        options.forEach(option => {
            if (option.checked == true) {
                selectedOptions.push(option.id);
            }
        });
        correctOptions.forEach(co => {
            if (selectedOptions.includes(co)) {
                $('#' + co).attr("disabled", true)
                $('#' + co).attr("checked", true);
                localStorage.setItem(co, true)
            } else {
                $('.wrongAnsMsg').css("display", 'block')
            }
        });
        checkIfAllQuesAttemped();
    })

    function checkIfAllQuesAttemped() {
        if (localStorage.getItem('opt5') && localStorage.getItem('opt3') && localStorage.getItem('opt12') && localStorage.getItem('opt14')) {
            showSuccess();
        }
    }
    function showSuccess() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        correctOptions.forEach(element => {
            $('#' + element).attr("disabled", true);
            $('#' + element).attr("checked", true);
        });
        $('.quiz-completed').css('display', 'block');
        $('.confetti').delay(3000).hide(1);
        $('#submit-quiz').attr("disabled", true);
    }
    checkIfAllQuesAttemped();
});