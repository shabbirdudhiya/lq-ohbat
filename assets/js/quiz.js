$(document).ready(function () {

    var option_3 = document.getElementById('opt3');
    var option_5 = document.getElementById('opt5');
    var option_12 = document.getElementById('opt12');
    var option_14 = document.getElementById('opt14');

    var correctOptions = [option_3.id, option_5.id, option_12.id, option_14.id];

    $('input:checkbox').click(function () {
        checkboxId = $(this).attr('id');
        if (correctOptions.includes(checkboxId)) {
            $('#' + checkboxId).attr("disabled", true);
            $('#' + checkboxId).attr("checked", true);
            localStorage.setItem(checkboxId, true);
            $('#'+checkboxId+'_true').css('color', 'green')
    } else {
            $(this).prop('indeterminate', true);
            $('#' + checkboxId).attr("disabled", true);
            
            if (checkboxId == 'opt1' || checkboxId == 'opt2' || checkboxId == 'opt4') {   
                $('.lable-q-1').css('color','red');
                $('.lable-q-1').css('text-decoration', 'line-through');

                // mark the correct checkbox
                $('#opt3_true').css('color', 'green');      
                $('#opt3').attr("checked", true);  
                $('#opt3').attr("disabled", true);
                localStorage.setItem('opt3', true);
            }
            else if (checkboxId == 'opt6' || checkboxId == 'opt7' || checkboxId == 'opt8') {
                $('.lable-q-2').css('color', 'red');
                $('.lable-q-2').css('text-decoration', 'line-through');

                // mark the correct checkbox
                $('#opt5_true').css('color', 'green');    
                $('#opt5').attr("disabled", true);
                $('#opt5').attr("checked", true);
                localStorage.setItem('opt5', true);
            }
            else if (checkboxId == 'opt9'||checkboxId=='opt10'||checkboxId=='opt11'){
                $('.lable-q-3').css('color','red');
                $('.lable-q-3').css('text-decoration', 'line-through');
                
                // mark the correct checkbox
                $('#opt12_true').css('color', 'green');    
                $('#opt12').attr("disabled", true);
                $('#opt12').attr("checked", true);
                localStorage.setItem('opt12', true);
            }
            else if (checkboxId == 'opt13'||checkboxId=='opt15'||checkboxId=='opt16'){
                $('.lable-q-4').css('color', 'red');
                $('.lable-q-4').css('text-decoration', 'line-through');
                
                // mark the correct checkbox
                $('#opt14_true').css('color', 'green');
                $('#opt14').attr("disabled", true);
                $('#opt14').attr("checked", true);
                localStorage.setItem('opt14', true);
            }
        }
        checkIfAllQuesAttemped();
    });

    function checkIfAllQuesAttemped() {
        if (localStorage.getItem('opt5') 
        && localStorage.getItem('opt3') 
        && localStorage.getItem('opt12')
        && localStorage.getItem('opt14')) {
            localStorage.setItem('quizProgress', 100)
            showSuccess();
        }
    }
    function disableoptions() {
        if (localStorage.getItem('opt3')){
            $(option_3).prop('disabled', true);
            $(option_3).prop('checked', true);
        }
        if (localStorage.getItem('opt5')){
            $(option_5).prop('disabled', true);
            $(option_5).prop('checked', true);
        } 
        if (localStorage.getItem('opt12')){
            $(option_12).prop('disabled', true);
            $(option_12).prop('checked', true);
        }
        if (localStorage.getItem('opt14')){
            $(option_14).prop('disabled', true);
            $(option_14).prop('checked', true);
        }
    }

    function showSuccess() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        correctOptions.forEach(element => {
            $('#' + element).attr("disabled", true);
            $('#' + element).attr("checked", true);
        });
        $('.quiz-completed').css('display', 'block');
        // $('#submit-quiz').attr("disabled", true);
    }
    checkIfAllQuesAttemped();
    disableoptions();
});