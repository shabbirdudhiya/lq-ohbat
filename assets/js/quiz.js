$(document).ready(function () {

    var option_3 = document.getElementById('opt3');
    var option_5 = document.getElementById('opt5');
    var option_12 = document.getElementById('opt12');
    var option_14 = document.getElementById('opt14');

    var correctOptions = [option_3.id, option_5.id, option_12.id, option_14.id];
    var selectedOptions = [];


    $('input:checkbox').click(function () {
        checkboxId = $(this).attr('id');
        if (correctOptions.includes(checkboxId)) {
            selectedOptions.push(checkboxId);
            $('#' + checkboxId).attr("disabled", true);
            $('#' + checkboxId).attr("checked", true);
            localStorage.setItem(checkboxId, true);

        } else {
            $(this).prop('indeterminate', true)
            $('#' + checkboxId).attr("disabled", true)
        }
        checkIfAllQuesAttemped();
    });

    function checkIfAllQuesAttemped() {
        if (localStorage.getItem('opt5') && localStorage.getItem('opt3') && localStorage.getItem('opt12') && localStorage.getItem('opt14')) {
            localStorage.setItem('quizProgress', 100)
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