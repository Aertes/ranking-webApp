


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
    var nums = document.getElementById('test');

    var subs = document.querySelectorAll('.sub');
    var adds = document.querySelectorAll('.add');
    var sums = document.querySelectorAll('.sum');
    var submits = document.querySelectorAll('#submit');




}






// var left = document.querySelectorAll('.mui-btn-numbox-minus');
// var right = document.querySelectorAll('.mui-btn-numbox-plus');
// var input = document.querySelectorAll('#test');
// var confirm = document.querySelectorAll('.confirm');
// var sum = document.querySelectorAll('.sum');
// var submit = document.querySelectorAll('#submit');

// var tbodys = document.querySelectorAll('tbody');
// var sumValue = sum.value;

// for (var i = 0; i < submit.length; i++) {

//     (function(k) {
//         var sub = submit[k];
//         sub.index = k;
//         sub.onclick = function() {
//             var allval = 0,
//                 tage;
//             tage = this.index;
//             var tests = tbodys[tage].querySelectorAll('#test');
//             // console.log(tage);
//             for (var i = 0; i < tests.length; i++) {
//                 allval += Math.round(parseFloat(tests[i].value) * 10) / 10;
//                 console.log(allval);
//             }
//             sum[tage].value = allval;
//         }
//     })(i)
// }












