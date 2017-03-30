


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

// window.onload = function () {
//     if (!document.getElementsByClassName) {
//         document.getElementsByClassName = function (cls) {
//             var ret = [];
//             var els = document.getElementsByTagName('*');
//             for (var i = 0, len = els.length; i < len; i++) {

//                 if (els[i].className.indexOf(cls + ' ') >= 0 || els[i].className.indexOf(' ' + cls + ' ') >= 0 || els[i].className.indexOf(' ' + cls) >= 0) {
//                     ret.push(els[i]);
//                 }
//             }
//             return ret;
//         }
//     }

    var left = document.querySelectorAll('.mui-btn-numbox-minus');
    var right = document.querySelectorAll('.mui-btn-numbox-plus');
    var input = document.querySelectorAll('#test');
    var confirm = document.querySelectorAll('.confirm');
    var sum = document.querySelectorAll('.sum');
    var sumValue = sum.value;
    var tr = document.querySelectorAll('tr');

    for (var i = 0; i < tr.length; i++) {

        (function (i) {
            lf = left[i];
            rg = right[i];
            var value = Math.round(((input[i].value) * 10) / 10);
            if (isNaN(value)) {
                return false;
            }

            var string = value.toString();
            var dian = string.indexOf('.');
            if (dian != 0) {
                dian = string.length;
                string += '.';
            }
            while (string.length <= dian + 1) {
                string += '0'
            }


            console.log(value)
            lf.onclick = function () {

                if (value != 0) {
                    value=value-0.1;
                }

                input[i].value = value;



                console.log(input[i].value)
                console.log(sumValue)

            }
            rg.onclick = function () {
                if (value < 100) {
                    value=value+0.1;
                }

                input[i].value = value;

                console.log(input[i].value)
                console.log(sumValue)
            }

        })(i)

//         tr[i].onclick = function (e) {
//             var e = e || window.event;
//             var el = e.target || e.srcElement;
//             var cls = el.className;
//             var cuntInput = document.querySelector('#test');
//             var value = parseFloat(cuntInput.value);
//             switch (cls) {
//                 case 'right':
//                     // statements_1
//                     cuntInput.value = value + 0.1;
//                     getSub(this);
//                     break;
//                 case 'left':
//                     // statements_def
//                     if (value > 1) {
//                         cuntInput.value = value - 0.1;
//                         getSub(this);
//                     }
//                     break;
//             }
//             getTotal();
//         }
//         // tr[i].input.onkeyup = function () {
//         //     var val = parseFloat(this.value);
//         //     if(isNaN(val) || val <= 0){
//         //         val = 0.0;
//         //     }
//         //     if(this.value != val){
//         //         this.value = val;
//         //     }
//         //     getTotal();
//         // };
//     }


//     function getTotal() {
//         var sumValue = 0;
//         for (var i = 0; i < tr.length; i++) {
//             sumValue += parseFloat(tr[i].cells[4].innerHTML);
//         }
//         sum.innerHTML = sumValue.toFixed(1);
//     }

//     function getSub(tr) {
//         var cuntInput = document.querySelectorAll('#test');

//     }

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












