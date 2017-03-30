var oHtml = document.documentElement;
getFont();
window.onresize = function () {
    getFont();
}
function getFont() {
    var screenWidth = oHtml.clientWidth;
    if (screenWidth <= 320) {
        oHtml.style.fontSize = '23.7037px';
    } else if (screenWidth >= 640) {
        oHtml.style.fontSize = '47.4074px';
    } else {
        oHtml.style.fontSize = screenWidth / (640 / 40) + 'px';
    }
}



