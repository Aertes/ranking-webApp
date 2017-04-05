

$('#detailModule li').first().each(function () {
    var _this = $(this);
    console.log(_this);
    _this.on('tap', function () {
        _this.next().toggle();
        console.log($('#table-responsive'));
        _this.children().toggleClass('mui-icon-arrowdown mui-icon-arrowup')
    })
})
