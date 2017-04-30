

$(function () {

    var startX = 0, dx = 0, currentX = 0, maxValue = 200;
    var box = document.querySelector('.box');
    var ul = box.querySelector('ul');
    var lis = ul.querySelectorAll('li');
    var ulWidth = ul.offsetWidth + maxValue;
    var boxWidth = box.offsetWidth;
    var init = ulWidth - boxWidth;
    var left;
    console.log(init);
    console.log(ul.offsetWidth);

    $('.overflow li').each(function () {
        var _this = $(this);
        $(this).children('div:first-child').on('click', function () {
            $(this).next().toggle(0, function () {
                _this.siblings().children('.content').hide();
            })
        })
    })

    $('.click-left').on('tap', function () {
        left = init / 2 - currentX
        if (left > 0) {
            currentX += 20
            ul.style.transform = 'translateX(' + currentX + 'px)';
        }
    });

    $('.click-right').on('tap', function () {
        left = init / 2 - currentX
        if (left == 0 || left < init) {
            currentX -= 20
            console.log(left);
            ul.style.transform = 'translateX(' + currentX + 'px)';
        }
    })

    //手势滑动
    ul.addEventListener('touchstart',  touchstartHandler);
    ul.addEventListener('touchmove',  touchmoveHandler);
    ul.addEventListener('touchend',  touchendHandler);

    function touchstartHandler(e) {
        startX = e.touches[0].pageX;
        ul.classList.remove('transitionAll');
    }
    function touchmoveHandler(e) {
        dx = e.touches[0].pageX - startX;
        ul.style.webkitTransform = 'translateX(' + (currentX + dx) + 'px)';
    }

    function touchendHandler(e) {
        currentX = currentX + dx;
        if (currentX < -init / 2) {
            currentX = -init / 2;
            ul.classList.add('transitionAll');
            ul.style.webkitTransform = 'translateX(' + currentX + 'px)';
        } else if (currentX > init / 2) {
            ul.classList.add('transitionAll');
            currentX = init / 2;
            ul.style.webkitTransform = 'translateX(' + currentX + 'px)';
        }
    }

})

// 模版引擎

