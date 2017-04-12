
mui.init({
    gestureConfig: {
        tap: true, //默认为true
        doubletap: true, //默认为false
        longtap: true, //默认为false
        swipe: true, //默认为true
        drag: true, //默认为true
        hold: false,//默认为false，不监听
        release: false//默认为false，不监听
    }
});



$(function () {

    var box = document.querySelector('.overflow');
    var ul = box.querySelector('ul');

    var offsetWidth = ul.offsetWidth;
    var clientWidth = box.clientWidth;
    var init = 1100 - clientWidth;
    var scrollLeft = box.scrollLeft;
    var startX = 0, dex = 0;
    var left;

    console.log(offsetWidth);

    $('.overflow li').each(function () {
        var _this = $(this);
        $(this).children('div:first-child').on('tap', function () {
            $(this).next().toggle(0, function () {
                _this.siblings().children('.content').hide();
            })
        })
    })


    $('.click-left').on('tap', function () {
        left = init / 2 - dex
        console.log(left);
        
        if (left > 0) {
            dex += 20
            ul.style.transform = 'translateX(' + dex + 'px)';
        } else if (left < init / 2 - dex) {
            dex = 0;
        }

    });


    $('.click-right').on('tap', function () {
        left = init / 2 - dex
        console.log(left);
        if (left != 0 && left < init) {
            dex -= 20
            ul.style.transform = 'translateX(' + dex + 'px)';
        }
    })

    //手势滑动
    ul.addEventListener('touchstart', touchstartHandler);
    ul.addEventListener('touchmove', touchmoveHandler);
    ul.addEventListener('touchend', touchendHandler);

    function touchstartHandler(e) {
        mui('#offCanvasContentScroll').off('drag');
        startX = e.touches[0].pageX;
        // console.log(startX);
    }
    function touchmoveHandler(e) {
        dx = e.touches[0].pageX - startX;
        console.log(dx);
        ul.style.transform = 'translateX(' + dx + ' px)';
        // console.log(ul);
    }
    function touchendHandler(e) {
        var dx = e.changedTouches[0].pageX - startX;
        // ul.style.transform += 'translateX('+ dx +' px)';
        ul.style.transform = 'translateX(' + dx + ' px)';

    }

})

