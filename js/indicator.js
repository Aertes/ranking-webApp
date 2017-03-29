
var oHtml = document.documentElement;
getFont();
window.onresize = function () {
    getFont();
}
function getFont() {
    var screenWidth = oHtml.clientWidth;
    if (screenWidth <= 320) {
        oHtml.style.fontSize = '23.7037px';
    } else if (screenWidth >= 750) {
        oHtml.style.fontSize = '40.4074px';
    } else {
        oHtml.style.fontSize = screenWidth / (750 / 40) + 'px';
    }
}


// 获取清空
var pop_srceen = document.querySelector('.pop_srceen');
var pop_info = pop_srceen.querySelector('.pop_info');
var linList = document.querySelector('.lin-list');
var modulusAll = linList.children;

var clearAll = [];

// 点击清空弹出模态框
$('.delAll').on('click', function () {
    del_t = this.querySelector('.del-t');
    del_t.style.webkitTransform = 'rotate(-20deg) translateX(-5px)'
    pop_srceen.style.display = 'block';
    pop_info.classList.add('my_bounceInDown');
});



// 点击确定时清空已选并关闭模态框

$('.sure').on('click', function () {
    pop_srceen.style.display = 'none';
    pop_info.classList.remove('my_bounceInDown');
    del_t.style.webkitTransform = '';
    linList.remove();
    $('.list').remove();
})



// 点击取消关闭模态框
$('.exit').on('click', function () {
    pop_srceen.style.display = 'none';
    pop_info.classList.remove('my_bounceInDown');
    del_t.style.webkitTransform = '';
})

// 点击清空模版模块

$('.del').on('click', function () {
    $('.clearList').remove();
})



// 点击添加模块

$('.add').each(function () {
    $(this).on('click', function () {
        console.log(name)
        $('.lin-list').append('<div class=" people list mui-col-xs-6"><span>博士生数（2015）</span><i>X</i></div>');
        clearAll.push($(this));
        console.log(clearAll);
    })
})

// 点击模块清除
$('.list').each(function () {
    $('i').on('click', function () {
        $(this).parent().remove();
    })
})












