
let clearMenChecklist = $('#btn-clear-checklist-men').on('click', function () {
    if (clearMenChecklist) {
        $('.clear-msg').css('display', 'block');
        $('#btn-clear-checklist-men').attr('disabled', true);

        // clear items
        localStorage.removeItem('plain-cloth');
        localStorage.removeItem('starch-cloth');
        localStorage.removeItem('cloth-button');
        localStorage.removeItem('without-pockets');
        localStorage.removeItem('bukhoor');
        localStorage.removeItem('starch-topi');
        localStorage.removeItem('namazi-topi');
        localStorage.removeItem('namazi-spectacles');
        localStorage.removeItem('nazami-taweez');
        localStorage.removeItem('nazami-socks');
        localStorage.removeItem('white-socks');
        localStorage.removeItem('menApparelProgress');
    }
})


let clearWomenChecklist = $('#btn-clear-checklist-women').on('click', function () {
    if (clearWomenChecklist) {
        $('.clear-msg').css('display', 'block');
        $('#btn-clear-checklist-women').attr('disabled', true);

        // Clear items
        localStorage.removeItem('appropriate-fitting');
        localStorage.removeItem('namazi-jodi');
        localStorage.removeItem('no-imitation');
        localStorage.removeItem('namazi-jewellery');
        localStorage.removeItem('namazi-spectacles');
        localStorage.removeItem('bengals-hairband');
        localStorage.removeItem('nazami-socks');
        localStorage.removeItem('womenApparelProgress')
    }
})

let clearQuiz = $('#btn-clear-quiz').on('click', function () {
    if (clearQuiz) {
        $('.clear-msg').css('display', 'block');
        $('#btn-clear-checklist').attr('disabled', true)

        localStorage.removeItem('opt3')
        localStorage.removeItem('opt5')
        localStorage.removeItem('opt12')
        localStorage.removeItem('opt14')
    }
})