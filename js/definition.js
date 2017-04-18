$(function (argument) {
    $('.module-list').each(function () {
        var _this = $(this);
        _this.on('tap', function () {
            _this.next().toggle();
            _this.toggleClass('mui-icon-arrowup mui-icon-arrowdown');
        });
    })

    $('.explain_list').each(function () {
        $(this).on('tap', function (event) {
            $(this).next().toggle();
            $(this).children('a').toggleClass('mui-icon-arrowright mui-icon-arrowdown');
        })
    })

    $('.show_over a').each(function () {
        $(this).on('tap', function () {
            $(this).parent().hide().siblings().show();
        })
    })

    $('.list').each(function () {
        var _this = $(this)
        $(this).on('tap', '.study', function () {
            $(this).next().toggle();
            $(this).toggleClass('mui-icon-arrowright mui-icon-arrowdown');
        })
    })
    
})  