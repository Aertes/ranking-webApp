
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



document.getElementById('weight').addEventListener('tap', function() {
  //打开关于页面
  mui.openWindow({
    url: 'weight.html', 
    id:'weight'
  });
});

document.getElementById('indicator').addEventListener('tap', function() {
  //打开关于页面
  mui.openWindow({
    url: 'indicator.html', 
    id:'indicator'
  });
});




