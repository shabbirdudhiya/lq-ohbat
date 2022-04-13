$(document).ready(function () {
    $("a").click(function () {
        let btnId = this.id;
        console.log(btnId);
        switch (btnId) {
            case 'plain-cloth-image':
                $('#image-men-apparel').attr('src', 'assets/img/2.jpg');
                break;
            case 'starch-cloth-image':
                $('#image-men-apparel').attr('src', '');
                break;
            case 'cloth-button-image':
                $('#image-men-apparel').attr('src', '');
                break;
            case 'without-pockets-image':
                $('#image-men-apparel').attr('src', '');
                break;
            case 'bukhoor-image':
                $('#image-men-apparel').attr('src', '');
                break;
            case 'starch-topi-image':
                $('#image-men-apparel').attr('src', '');
                break;
            case 'namazi-topi-image':
                $('#image-men-apparel').attr('src', '');
                break;
            case 'namaz-spectacles-image':
                $('#image-men-apparel').attr('src', '');
                break;
            case 'taweez-image':
                $('#image-men-apparel').attr('src', '');
                break;
            case 'nazami-socks-image':
                $('#image-men-apparel').attr('src', '');
                break;
            case 'socks-namazi-image':
                $('#image-men-apparel').attr('src', '');
                break;
            case 'socks-white-image':
                $('#image-men-apparel').attr('src', '');
                break;
            default:
                $('#image-men-apparel').attr('src', '');
                break;
        }
    });
});
