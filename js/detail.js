

$('#detailModule li').each(function () {
    var _this = $(this);
    _this.on('tap', function () {
        _this.next().toggle();
        _this.children().toggleClass('mui-icon-arrowdown mui-icon-arrowup')
    })
})


