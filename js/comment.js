

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



mui.init();
//侧滑容器父节点
var offCanvasWrapper = mui('#offCanvasWrapper');
//主界面容器
var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');

//移动效果是否为整体移动
var moveTogether = false;
//侧滑容器的class列表，增加.mui-slide-in即可实现菜单移动、主界面不动的效果；
var classList = offCanvasWrapper[0].classList;
//变换侧滑动画移动效果；
mui('.mui-input-group').on('change', 'input', function () {
    if (this.checked) {
        offCanvasSide.classList.remove('mui-transitioning');
        offCanvasSide.setAttribute('style', '');
        classList.remove('mui-slide-in');
        classList.remove('mui-scalable');
        switch (this.value) {
            case 'main-move':
                if (moveTogether) {
                    //仅主内容滑动时，侧滑菜单在off-canvas-wrap内，和主界面并列
                    offCanvasWrapper[0].insertBefore(offCanvasSide, offCanvasWrapper[0].firstElementChild);
                }
                break;
            case 'main-move-scalable':
                if (moveTogether) {
                    //仅主内容滑动时，侧滑菜单在off-canvas-wrap内，和主界面并列
                    offCanvasWrapper[0].insertBefore(offCanvasSide, offCanvasWrapper[0].firstElementChild);
                }
                classList.add('mui-scalable');
                break;
            case 'menu-move':
                classList.add('mui-slide-in');
                break;
            case 'all-move':
                moveTogether = true;
                //整体滑动时，侧滑菜单在inner-wrap内
                offCanvasInner.insertBefore(offCanvasSide, offCanvasInner.firstElementChild);
                break;
        }
        offCanvasWrapper.offCanvas().refresh();
    }
});

//主界面和侧滑菜单界面均支持区域滚动；
mui('#offCanvasSideScroll').scroll();
mui('#offCanvasContentScroll').scroll();
//实现ios平台原生侧滑关闭页面；
if (mui.os.plus && mui.os.ios) {
    mui.plusReady(function () { //5+ iOS暂时无法屏蔽popGesture时传递touch事件，故该demo直接屏蔽popGesture功能
        plus.webview.currentWebview().setStyle({
            'popGesture': 'none'
        });
    });
}


document.getElementById('index').addEventListener('tap', function() {
  //打开关于页面
  mui.openWindow({
    url: 'index.html', 
    id:'index'
  });
});


document.getElementById('compare').addEventListener('tap', function() {
  //打开关于页面
  mui.openWindow({
    url: 'compare.html', 
    id:'compare'
  });
});



document.getElementById('detail').addEventListener('tap', function() {
  //打开关于页面
  mui.openWindow({
    url: 'detail.html', 
    id:'detail'
  });
});


// document.getElementById('idicator').addEventListener('tap', function() {
//   //打开关于页面
//   mui.openWindow({
//     url: 'idicator.html', 
//     id:'idicator'
//   });
// });

