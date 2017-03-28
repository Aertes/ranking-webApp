

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



// var uls = document.querySelectorAll('ul');
// var lis = document.querySelectorAll('li');
// var i = 0, k = 0;


$('ul>li').each(function () {

    console.log(123);
    this.onclick = function () {
        console.log(121233);
        $('#table-responsive').toggle();
    }
})


// for (var i = 0; i < uls.length; i++) {
//     console.log(uls[i])
//     $('ul>li').on('click', function () {

//         $('ul').children().eq(1).toggle();
//         console.log(351);
//     });
// }












// mui.init();
// var indicator = document.querySelector('#indicator-module');
// var ul = indicator.childNode;
// var lis = ul.children;
// for(var i = 0, len = lis.length; i < len; i++){
//     (function(i){
//         li = lis[i];
//         li.onclick = function(){
//             var div = document.querySelector('#table-responsive');
//             if(div.style.display == 'none'){
//                 div.style.display == 'table'
//             }else{
//                 div.style.display == 'none'
//             }
//         }
//     })

// }

