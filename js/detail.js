

$('#detailModule li').each(function () {
    var _this = $(this);
    _this.on('tap', function () {
        _this.next().toggle();
        _this.children().toggleClass('mui-icon-arrowdown mui-icon-arrowup')
    })
})


// 模态框

$('td .info').each(function () {
    $(this).on('tap', function () {
        popupDiv('info');
    })
})

$('#info').on('tap', '.close', function(){
    hideDiv('info');
})



$('td .amend_data').each(function () {
    $(this).on('tap', function () {
        popupDiv('amend_data');
    })
})

$('#amend_data').on('tap', '.close', function(){
    hideDiv('amend_data');
})



$('td .record').each(function () {
    $(this).on('tap', function () {
        popupDiv('record');
    })
})

$('#record').on('tap', '.close', function(){
    hideDiv('record');
})