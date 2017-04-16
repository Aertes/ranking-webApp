

// 侧滑菜单
mui.init();
var offCanvasWrapper = mui('#offCanvasWrapper');
var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');

var moveTogether = false;
var classList = offCanvasWrapper[0].classList;
mui('.mui-input-group').on('change', 'input', function () {
    if (this.checked) {
        offCanvasSide.classList.remove('mui-transitioning');
        offCanvasSide.setAttribute('style', '');
        classList.remove('mui-slide-in');
        classList.remove('mui-scalable');
        switch (this.value) {
            case 'main-move':
                if (moveTogether) {
                    offCanvasWrapper[0].insertBefore(offCanvasSide, offCanvasWrapper[0].firstElementChild);
                }
                break;
            case 'main-move-scalable':
                if (moveTogether) {
                    offCanvasWrapper[0].insertBefore(offCanvasSide, offCanvasWrapper[0].firstElementChild);
                }
                classList.add('mui-scalable');
                break;
            case 'menu-move':
                classList.add('mui-slide-in');
                break;
            case 'all-move':
                moveTogether = true;
                offCanvasInner.insertBefore(offCanvasSide, offCanvasInner.firstElementChild);
                break;
        }
        offCanvasWrapper.offCanvas().refresh();
    }
});

mui('#offCanvasSideScroll').scroll();
mui('#offCanvasContentScroll').scroll();
if (mui.os.plus && mui.os.ios) {
    mui.plusReady(function () {
        plus.webview.currentWebview().setStyle({
            'popGesture': 'none'
        });
    });
}



// 链接新页面

(function () {
    
    document.getElementById('index').addEventListener('tap', function () {
        mui.openWindow({
            url: 'index.html',
            id: 'index'
        });
    });

    document.getElementById('compare').addEventListener('tap', function () {
        mui.openWindow({
            url: 'compare.html',
            id: 'compare'
        });
    });

    document.getElementById('rankings').addEventListener('tap', function () {
        mui.openWindow({
            url: 'rankings.html',
            id: 'rankings'
        });
    });

    document.getElementById('detail').addEventListener('tap', function () {
        mui.openWindow({
            url: 'detail.html',
            id: 'detail'
        });
    });

})();


// 模块点击显示掩藏
$(document).on('tap', '#user', function () {
    $('.dropdown-menu').toggle();
})



// 模态框

function popupDiv(div_id) {
    var $div_obj = $("#" + div_id);
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var popupHeight = $div_obj.height();
    var popupWidth = $div_obj.width();
    
    $("<div id='bg'></div>").width(windowWidth * 0.99)
        .height(windowHeight * 0.99).click(function () {
            // hideDiv(div_id);
        }).appendTo(".mui-inner-wrap").fadeIn();

    // 显示弹出的DIV 
    $div_obj.css({
        "position": "absolute"
    }).animate({
        left: (windowWidth - popupWidth) / 2,
        top: (windowHeight - popupHeight) / 2,
        opacity: "show"
    }, "slow");
}

/*隐藏弹出DIV*/
function hideDiv(div_id) {
    $("#bg").remove();
    $("#" + div_id).animate({
        left: 0,
        top: 0,
        opacity: "hide"
    }, "slow");
}

// 侧边栏

$('.versions a').each(function(){
    $(this).on('tap', function(){
        $(this).addClass('click_color').parent().siblings('p').children('a').removeClass('click_color');
    })
})