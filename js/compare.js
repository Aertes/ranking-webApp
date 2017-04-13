
mui.init({
    swipeBack: true //启用右滑关闭功能
});
window.addEventListener('toggle', function (event) {
    if (event.target.id === 'M_Toggle') {
        var isActive = event.detail.isActive;
        var table = document.querySelector('.mui-table-view');
        var card = document.querySelector('.mui-card');
        if (isActive) {
            card.appendChild(table);
            card.style.display = '';
        } else {
            var content = document.querySelector('.mui-content');
            content.insertBefore(table, card);
            card.style.display = 'none';
        }
    }
});


$('.university').children('div').each(function(){
    var index = $(this).index();
    $(this).on('tap',  function(){
        $(this).children('a').addClass('font-color').parent().siblings().children('a').removeClass('font-color');
        $('.svg div').eq(index).show().siblings().hide();
    })
})


$('#panel4').on('tap', 'li', function(e){
    $(this).next().toggle();
    $(this).children().eq(0).toggleClass('mui-icon-arrowup mui-icon-arrowdown');
})



