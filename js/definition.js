$(function (argument) {
     $('.module-list').each(function () {
        var _this = $(this);
        _this.on('click', function () {
            _this.next().toggle();
        });
    })

    var uls = $('.ul');
    $('.list').each(function () {
        console.log(uls);
        $(this).on('click', '.study', function () {
            $(this).next().toggle();
            $(this).toggleClass('mui-icon-arrowright mui-icon-arrowdown');
            $(this).addClass('active_color').parent().parent().parent().siblings().find('h4').removeClass('active_color');
        })
        $(this).on('click', '.study', function () {
            $(this).addClass('active_color').parent().parent().parent().parent().parent().siblings().children('ul').children('li').find('h4').removeClass('active_color');
        })
    })

})  