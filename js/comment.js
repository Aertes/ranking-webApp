

var oHtml = document.documentElement;
getFont();
window.onresize = function () {
    getFont();
}
function getFont() {
    var screenWidth = oHtml.clientWidth;
    if (screenWidth <= 320) {
        oHtml.style.fontSize = '23.7037px';
    } else if (screenWidth >= 640) {
        oHtml.style.fontSize = '47.4074px';
    } else {
        oHtml.style.fontSize = screenWidth / (640 / 40) + 'px';
    }
}


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

    document.getElementById('helpIndex').addEventListener('tap', function () {
        mui.openWindow({
            url: 'helpIndex.html',
            id: 'helpIndex'
        });
    });

    document.getElementById('inform').addEventListener('tap', function () {
        mui.openWindow({
            url: 'inform.html',
            id: 'inform'
        });
    });

})();


// 模块点击显示掩藏
$(document).on('tap', '#user', function () {
    $('.dropdown-menu').toggle();
})



