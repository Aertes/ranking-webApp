

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



$('ul>li').each(function () {
    var _this = $(this);
    console.log(_this);
    _this.on('click', function () {
        _this.next().toggle();
        _this.children().toggleClass('mui-icon-arrowdown mui-icon-arrowup')
    })
})


var inputValue = document.querySelector('#test').value;
changeOneDecimal_f(inputValue);


function changeOneDecimal_f(num) {
    var f_x = parseFloat(num);
    if (isNaN(f_x)) {
        return false;
    }
    var f_x = Math.round(num * 100) / 100;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf('.');
    if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += '.';
    }
    while (s_x.length <= pos_decimal + 2) {
        s_x += '0';
    }
    return s_x;
}








