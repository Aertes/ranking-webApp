

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



mui.init({
    swipeBack: true //启用右滑关闭功能
});
mui('.mui-input-group').on('change', 'input', function () {
    var value = this.checked ? "true" : "false";
    this.previousElementSibling.innerText = "checked：" + value;
});


(function ($) {
    $.init();
    var result = $('#result')[0];
    var btns = $('.btn');
    btns.each(function (i, btn) {
        btn.addEventListener('tap', function () {
            var optionsJson = this.getAttribute('data-options') || '{}';
            var options = JSON.parse(optionsJson);
            var id = this.getAttribute('id');
            var picker = new $.DtPicker(options);
            picker.show(function (rs) {
                result.innerText = '选择结果: ' + rs.text;
                picker.dispose();
            });
        }, false);
    });
})(mui);

