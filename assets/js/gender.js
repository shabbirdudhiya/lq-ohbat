$(document).ready(function () {
$('#men-apparel-link').hide()
$('#women-apparel-link').hide()

  $('#male, #female').click(function(){
    //set localStorage 
    btnID = $(this).attr('id');
    localStorage.setItem('gender', btnID);
      localStorage.removeItem('showModal');
      localStorage.setItem('showModal', false);
      // Close modal
      $('#btn-close-modal').click()
      if (btnID == "male") {
        $('#men-apparel-link').show();
        $('.womenprogressbar').css('display', 'none');
      } else if (btnID == "female") {
        $('#women-apparel-link').show();
        $('.menprogressbar').css('display', 'none');
      }
      checkGender();
  });

  function checkGender() {
    if (localStorage.getItem("gender") == "male") {
      $('#men-apparel-link').show();
      $('.womenprogressbar').css('display', 'none');  
      // set a href
      $('.libas-a-href').attr("href", "apparels-men.html");
      // set localStorage of other gender
      localStorage.setItem("womenApparelProgress", 100);
    } else if (localStorage.getItem("gender") == "female") {
      $('#women-apparel-link').show();
      $('.menprogressbar').css('display', 'none');
      // set a href
      $('.libas-a-href').attr("href", "apparels-women.html");  
      // set localStorage of other gender
      localStorage.setItem("menApparelProgress", 100);
    }    
  }
  checkGender();
})