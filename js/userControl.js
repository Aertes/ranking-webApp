
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


$(function () {
    $('.user').on('tap', 'button', function () {
        popupDiv('add_user');
    })
    $('#add_user').on('tap', '.close', function () {
        hideDiv('add_user');
    })
})