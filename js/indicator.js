
// var oHtml = document.documentElement;
// getFont();
// window.onresize = function () {
//     getFont();
// }
// function getFont() {
//     var screenWidth = oHtml.clientWidth;
//     if (screenWidth <= 320) {
//         oHtml.style.fontSize = '23.7037px';
//     } else if (screenWidth >= 750) {
//         oHtml.style.fontSize = '40.4074px';
//     } else {
//         oHtml.style.fontSize = screenWidth / (750 / 40) + 'px';
//     }
// }



// $(function () {

//     var tempvarweight = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
//     var tempvar = ["", "", "", "", "", "", "", "", "", "", ""];

//     // 获取清空
//     var pop_srceen = document.querySelector('.pop_srceen');
//     var pop_info = pop_srceen.querySelector('.pop_info');



//     var linList = document.querySelector('.lin-list');
//     var lists = linList.children;
//     var x = linList.querySelectorAll('i');
//     var clearAll = [];

//     console.log(lists);


//     $('.lin-list').children().each(function () {
//         // 点击清空弹出模态框
//         $('.delAll').on('click', function () {
//             del_t = this.querySelector('.del-t');
//             del_t.style.webkitTransform = 'rotate(-20deg) translateX(-5px)'
//             pop_srceen.style.display = 'block';
//             pop_info.classList.add('my_bounceInDown');
//         });
//     })






//     // 点击确定时清空已选并关闭模态框
//     $('.sure').on('click', function () {
//         pop_srceen.style.display = 'none';
//         pop_info.classList.remove('my_bounceInDown');
//         del_t.style.webkitTransform = '';
//         $('.lin-list').each(function () {
//             $(this).html(' ');
//         });
//     })


//     // 点击取消关闭模态框
//     $('.exit').on('click', function () {
//         pop_srceen.style.display = 'none';
//         pop_info.classList.remove('my_bounceInDown');
//         del_t.style.webkitTransform = '';
//     })

//     // 点击清空模版模块

//     $('.del').on('click', function () {
//         $('.clearList').html(" ");
//     })



//     // 点击添加模块
//     $('.add').each(function () {
//         $(this).on('click', function () {
//             $('.lin-list').append('<div class=" people list mui-col-xs-6"><span>博士生数（2015）</span><i>X</i></div>');
//             // clearAll.push($(this));
//         })
//     })



//     // 点击模块清除
//     $('.list').each(function () {
//         $('i').on('click', function () {
//             $(this).parent().remove();
//         })
//     })


//     // 模块显示掩藏
//     $('#indicator-module li').each(function () {
//         var _this = $(this);
//         _this.on('tap', function () {
//             _this.next().toggle();
//             _this.children().toggleClass('mui-icon-arrowdown mui-icon-arrowup')
//         })
//     })


// })




$(function(){

    $('.delAll').on('click', function(){
        $('.lin-list').html('');
        for(var i = 1; i < 11; i++){

        }
        $('#num').html('0');


    })


})






