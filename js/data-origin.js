

$('ul>li').each(function () {
    var _this = $(this);
    // console.log(_this);
    _this.on('click', function () {
        _this.next().toggle();
        _this.children().toggleClass('mui-icon-arrowdown mui-icon-arrowup')
    })
})