$(document).ready(function () {

    $("button").click(function () {
        let btnId = this.id;
        console.log(btnId);
        switch (btnId) {
            case 'plain-cloth-image':
                $('#cloth').attr('src', '');
                break;
            case 'starch-cloth-image':
                $('#cloth').attr('src', '');
                break;
            case 'cloth-button-image':
                $('#cloth').attr('src', '');
                break;
            case 'without-pockets-image':
                $('#cloth').attr('src', '');
                break;
            case 'bukhoor-image':
                $('#cloth').attr('src', '');
                break;
            default:
                $('#cloth').attr('src', '');
                break;
        }
    });
});
