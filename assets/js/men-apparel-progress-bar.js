$(document).ready(function () {
    // save checkboxes
    var plainCloth = document.getElementById('plain-cloth')
    var starchCloth = document.getElementById('starch-cloth')
    var clothButton = document.getElementById('cloth-button')
    var withoutPockets = document.getElementById('without-pockets')
    var bukhoor = document.getElementById('bukhoor')
    var starchTopi = document.getElementById('starch-topi')
    var nazamiTopi = document.getElementById('namazi-topi')
    var nazamiSpectacles = document.getElementById('namazi-spectacles')
    var nazamiTaweez = document.getElementById('nazami-taweez')
    var nazamiSocks = document.getElementById('nazami-socks')
    var whiteSocks = document.getElementById('white-socks')

    var menApparelVars = [plainCloth, starchCloth, clothButton, withoutPockets, bukhoor, starchTopi, nazamiTopi, nazamiSpectacles, nazamiTaweez, nazamiSocks, whiteSocks];

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
        saveMenApparel(menApparelVars)
    }

    function saveMenApparel(menApparelVars) {
        menApparelVars.forEach(element => {
            if (element.checked == true) {
                if (localStorage.getItem(element.id)) {
                    localStorage.removeItem(element.id);
                    localStorage.setItem(element.id, true)
                    // Disable Checkbox
                    $('#' + element.id).attr("disabled", true)
                    $('#progressbarMenApparel').css('width', percentage + '%').attr('aria-valuenow', percentage).html(percentage + "%");
                    localStorage.setItem('menApparelProgress', percentage)
                    $('.notapplicablesection').hide();
                    if (percentage == 100) {
                        showCompletedCheck(percentage);
                    }
                }
                else {
                    localStorage.setItem(element.id, true)
                    $('#' + element.id).attr("disabled", true)
                    $('#progressbarMenApparel').css('width', percentage + '%').attr('aria-valuenow', percentage).html(percentage + "%");
                    localStorage.setItem('menApparelProgress', percentage)
                    $('.notapplicablesection').hide();
                    if (percentage == 100) {
                        showCompletedCheck(percentage);
                    }
                }
            }
        })
    }

    function showCompletedCheck(percentage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (percentage == 100) {
            $('.check-men-apparel').css('display', 'block');
        }
        $('.confetti').delay(3000).hide(1);
    }

    function getLocalStorageData() {
        for (const [key, value] of Object.entries(localStorage)) {
            // console.log(`${key}: ${value}`);
            if (key == "menApparelProgress") {
                $('#progressbarMenApparel').css('width', value + '%').attr('aria-valuenow', value).html(value + "%")
                if (value == 100) {
                    showCompletedCheck(value);
                }
            } else {
                $('#' + key).attr("disabled", true).prop('checked', true);
            }
        }
    }



    $('#not-applicable').click(function () {
        localStorage.setItem('menApparelProgress', 100)
        localStorage.setItem('menApparelNotApplicable', true)
        hideChecklistSection();
        $('#not-applicable').attr("disabled", true).prop('checked', true);
    });
    function checkIfNotApplicable() {
        if (localStorage.getItem('menApparelNotApplicable') == "true") {
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

