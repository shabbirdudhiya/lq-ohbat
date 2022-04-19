
// Gender Code
  // Radio buttons

$('#male').click(function () {
  genderRadioButton = $(this).attr('id');
  localStorage.setItem('gender', genderRadioButton)
  localStorage.removeItem('showModal');
  localStorage.setItem('showModal', false);
  document.getElementById('btn-close-modal').click()
})
$('#female').click(function () {
    genderRadioButton = $(this).attr('id');
    localStorage.setItem('gender', genderRadioButton)
    localStorage.removeItem('showModal');
    localStorage.setItem('showModal', false);
    document.getElementById('btn-close-modal').click()
});
function checkGender() {
    if (localStorage.getItem("gender") === "male") {
        $('.women-apperal').hide();
        $('.womenprogressbar').hide();
        localStorage.setItem("womenApparelProgress", 100);
        $('.libas-a-href').attr("href", "apparels-men.html");
    } else {
        $('.men-apperal').hide();
        $('.menprogressbar').hide();
        localStorage.setItem("menApparelProgress", 100);
        $('.libas-a-href').attr("href", "apparels-women.html");
    }
    
}

checkGender();