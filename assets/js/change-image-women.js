$(document).ready(function () {
  $("a").click(function () {
    let btnId = this.id;
    // console.log(btnId);
    switch (btnId) {
      case "appropriate-fitting":
        $("#image-women-apparel").attr("src", "assets/img/2.jpg");
        break;
      case "namaz-jodi-image":
        $("#image-women-apparel").attr("src", "");
        break;
      case "mehndi-image":
        $("#image-women-apparel").attr("src", "");
        break;
      case "namazi-jewellery-image":
        $("#image-women-apparel").attr("src", "");
        break;
      case "namaz-spectacles-image":
        $("#image-women-apparel").attr("src", "");
        break;
      case "namaz-bengals-image":
        $("#image-women-apparel").attr("src", "");
        break;
      case "nazami-socks-image":
        $("#image-women-apparel").attr("src", "");
        break;
    }
  });
});
