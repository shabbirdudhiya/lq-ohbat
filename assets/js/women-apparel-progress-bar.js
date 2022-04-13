$(document).ready(function () {
    // save checkboxes
    var appropriateFitting = document.getElementById('appropriate-fitting')
    var nazamiJodi = document.getElementById('namazi-jodi')
    var noImitationJewellery = document.getElementById('no-imitation')
    var namaziJewellery = document.getElementById('namazi-jewellery')
    var nazamiSpectacles = document.getElementById('namazi-spectacles')
    var nazamiBengalsHairband = document.getElementById('bengals-hairband')
    var nazamiSocks = document.getElementById('nazami-socks')

    var womenApparelVars = [appropriateFitting, nazamiJodi, noImitationJewellery, namaziJewellery, nazamiSpectacles, nazamiBengalsHairband, nazamiSocks];

    // get box count
    var count = 0;
    var checked = 0;
    var percentage = 0;

    function countBoxes() {
        count = $("input[type='checkbox']").length;
    }

    countBoxes();
    $(":checkbox").click(countBoxes);
    // count checks
    function countChecked() {
        checked = $("input:checked").length;
        // console.log(checked);
        percentage = parseInt(((checked / count) * 100), 10);
        $(".progressbar-bar").progressbar({
            value: percentage
        });
        $(".progressbar-label").text(percentage + "%");
        saveWomenApparel(womenApparelVars);
    }

    function saveWomenApparel(womenApparelVars) {
        womenApparelVars.forEach(element => {
            if (element.checked == true) {
                if (localStorage.getItem(element.id)) {
                    localStorage.removeItem(element.id);
                    localStorage.setItem(element.id, true)

                    // Disable Checkbox
                    $('#' + element.id).attr("disabled", true)
                    $('#progressbarWomenApparel').css('width', percentage + '%').attr('aria-valuenow', percentage).html(percentage + "%");
                    localStorage.setItem('womenApparelProgress', percentage);
                    $('.notapplicablesection').hide();
                    if (percentage == 100) {
                        showCompletedCheck();
                    }
                }
                else {
                    localStorage.setItem(element.id, true)
                    $('#' + element.id).attr("disabled", true)
                    $('#progressbarWomenApparel').css('width', percentage + '%').attr('aria-valuenow', percentage).html(percentage + "%");
                    localStorage.setItem('womenApparelProgress', percentage);
                    $('.notapplicablesection').hide();
                    if (percentage == 100) {
                        showCompletedCheck();
                    }
                }
            }
        })
    }

    function showCompletedCheck() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        $('.check-women-apparel').css('display', 'block');
        $('.confetti').delay(3000).hide(1);
    }

    function getLocalStorageData() {
        for (const [key, value] of Object.entries(localStorage)) {
            // console.log(`${key}: ${value}`);
            if (key == "womenApparelProgress") {
                $('#progressbarWomenApparel').css('width', value + '%').attr('aria-valuenow', value).html(value + "%")
                if (value == 100) {
                    showCompletedCheck();
                }
            } else {
                $('#' + key).attr("disabled", true).prop('checked', true);
            }
        }
    }


    $('#not-applicable').click(function () {
        localStorage.setItem('womenApparelProgress', 100)
        localStorage.setItem('womenApparelNotApplicable', true)
        hideChecklistSection();
        $('#not-applicable').attr("disabled", true).prop('checked', true);
    });
    function checkIfNotApplicable() {
        if (localStorage.getItem('womenApparelNotApplicable') == "true") {
            hideChecklistSection();
            $('#not-applicable').attr("disabled", true).prop('checked', true);
        }
    }
    function hideChecklistSection() {
        $('.cards').hide();
    }

    checkIfNotApplicable();

    countChecked();
    getLocalStorageData();
    $(":checkbox").click(countChecked);
});