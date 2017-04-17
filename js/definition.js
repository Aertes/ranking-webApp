$(function (argument) {
     $('.module-list').each(function () {
        var _this = $(this);
        _this.on('tap', function () {
            _this.next().toggle();
            _this.toggleClass('mui-icon-arrowup mui-icon-arrowdown');
        });
    })

    $('.explain_list').each(function(){
        var index = $(this).index();
        $(this).on('tap', function(){
            $('show_over').children('div').eq(index).toggle();
            $(this).children('a').toggleClass('mui-icon-arrowright mui-icon-arrowdown');
            $(this).children('div').addClass('explain_bd').parent().siblings().children('div').removeClass('explain_bd');
        })
    })

    var uls = $('.ul');
    $('.list').each(function () {
        $(this).on('tap', '.study', function () {
            $(this).next().toggle();
            $(this).toggleClass('mui-icon-arrowright mui-icon-arrowdown');
            $(this).addClass('active_color').parent().parent().parent().siblings().find('h4').removeClass('active_color');
        })
        $(this).on('tap', '.study', function () {
            $(this).addClass('active_color').parent().parent().parent().parent().parent().siblings().children('ul').children('li').find('h4').removeClass('active_color');
        })
    })

})  