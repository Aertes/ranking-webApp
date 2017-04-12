
// mui.init({
//     gestureConfig: {
//         tap: true, //默认为true
//         doubletap: true, //默认为false
//         longtap: true, //默认为false
//         swipe: true, //默认为true
//         drag: false, //默认为true
//         hold: false,//默认为false，不监听
//         release: false//默认为false，不监听
//     }
// });



$(function () {

    var box = document.querySelector('.overflow');
    var ul = box.querySelector('ul');

    var ulWidth = ul.offsetWidth;
    var boxWidth = box.offsetWidth;
    var init = ulWidth - boxWidth;
    // var scrollLeft = box.scrollLeft;
    var startX = 0, dex = 0, dx = 0, currentX =0, maxValue = 50;
    var left;

    console.log(ulWidth);
    console.log(boxWidth);

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
        startX = e.touches[0].pageX;
        ul.classList.remove('transitionAll');
    }
    function touchmoveHandler(e) {
        dx = e.touches[0].pageX - startX;
        if((currentX + dx) < maxValue && (currentX + dx) > -(ulWidth - boxWidth + maxValue)){
			ul.style.webkitTransform = 'translateX('+(currentX + dx)+'px)';
		}
    }
    function touchendHandler(e) {
        currentX = currentX + dx;
        if(currentX > 0){
			ul.classList.add('transitionAll');
			currentY = 0;
			ul.style.webkitTransform = 'translateX('+ currentX +'px)';
		}else if(currentX < -(ulWidth - boxWidth)){
			ul.classList.add('transitionAll');
			currentX = -(ulWidth - boxWidth)
			ul.style.webkitTransform = 'translateX('+ currentX+'px)';
		}
    }

})

