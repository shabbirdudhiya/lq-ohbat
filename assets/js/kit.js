$(document).ready(function () {

    var namaziSujniMasallah = document.getElementById('namazi-sujni-masallah')
    var namaziTasbeeh = document.getElementById('namazi-tasbeeh')
    var namaziRumaal = document.getElementById('namazi-rumaal')
    var munajaatShareefah = document.getElementById('munajaat-shareefah')
    var bihoriHafti = document.getElementById('bihori-hafti')
    var fajrHafti = document.getElementById('fajr-hafti')
    var silatAlImam = document.getElementById('list-of-dua')
    var nazrAlMaqam = document.getElementById('nazr-al-maqam')
    var najwa = document.getElementById('najwa')
    var qardanhasanah = document.getElementById('qardanhasanah')
    var faizAlMawaidAlBurhaniyah = document.getElementById('faiz-al-mawaid-al-burhaniyah')
    var tosho = document.getElementById('tosho')

    var kit = [namaziSujniMasallah, namaziTasbeeh, namaziRumaal, munajaatShareefah, bihoriHafti, fajrHafti, silatAlImam, nazrAlMaqam, najwa, qardanhasanah, faizAlMawaidAlBurhaniyah, tosho];

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
        saveKit(kit)
    }


    function saveKit(kit) {
        kit.forEach(element => {
            if (element.checked == true) {
                // console.log(element.id);
                if (localStorage.getItem(element.id)) {
                    localStorage.removeItem(element.id);
                    localStorage.setItem(element.id, true)

                    // Disable Checkbox
                    $('#' + element.id).attr("disabled", true)
                    $('#progressbarKit').css('width', percentage + '%').attr('aria-valuenow', percentage).html(percentage + "%");
                    localStorage.setItem('kitProgress', percentage)
                    if (percentage == 100) {
                        showCompletedCheck(percentage);
                    }
                }
                else {
                    localStorage.setItem(element.id, true)
                    $('#' + element.id).attr("disabled", true)
                    $('#progressbarKit').css('width', percentage + '%').attr('aria-valuenow', percentage).html(percentage + "%")

                    localStorage.setItem('kitProgress', percentage)
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
            $('.check-kit-apparel').css('display', 'block');
        }
        $('.confetti').delay(3000).hide(1);
    }

    function getLocalStorageData() {
        for (const [key, value] of Object.entries(localStorage)) {
            // console.log(`${key}: ${value}`);
            if (key == "kitProgress") {
                $('#progressbarKit').css('width', value + '%').attr('aria-valuenow', value).html(value + "%")
                if (value == 100) {
                    showCompletedCheck(value);
                }
            } else {
                $('#' + key).attr("disabled", true).prop('checked', true);
            }
        }
    }
    countChecked();
    getLocalStorageData();
    $(":checkbox").click(countChecked);
});