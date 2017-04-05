


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


// 点击模块显示掩藏
$('ul>li').each(function () {
    var _this = $(this);
    // console.log(_this);
    _this.on('click', function () {
        _this.next().toggle();
        _this.children().toggleClass('mui-icon-arrowdown mui-icon-arrowup')
    })
})




window.onload = function () {

    if (!document.getElementsByClassName) {
        document.getElementsByClassName = function (cls) {
            var ret = [];
            var els = document.getElementsByTagName('*');
            for (var i = 0, len = els.length; i < len; i++) {

                if (els[i].className.indexOf(cls + ' ') >= 0 || els[i].className.indexOf(' ' + cls + ' ') >= 0 || els[i].className.indexOf(' ' + cls) >= 0) {
                    ret.push(els[i]);
                }
            }
            return ret;
        }
    }

    var table = document.getElementById('module-nestedtable');
    var tr = table.children[1].rows;
    var num = document.querySelector('.num');
    var sum = document.querySelector('.sum');
    var sub = document.querySelector('.sub');
    var add = document.querySelector('.add');
    var submit = document.querySelector('#submit');

    function getTotal() {
        

    }

    for (var i = 0; i < tr.length; i++) {
        tr[i].onclick = function (e) {
            var e = e || window.event;
            var el = e.target || e.srcElement;
            var cls = el.className;
            var countInout = this.querySelector('.num');
            var value = Math.round(parseFloat(countInout.value)*10)/10;
            console.log(value);
            switch (cls) {
                case 'add':
                    if(countInout.value < 100){
                        countInout.value = Math.round(parseFloat( value + 0.1)*10)/10;
                    }
                    break;
                case 'sub':
                    if(countInout.value == 0){
                        countInout.value = 0.0;
                    }else{
                        countInout.value = Math.round(parseFloat( value - 0.1)*10)/10;
                    }
                    break;
            }

        }
        getTotal();
    }

}







