

var oHtml = document.documentElement;
getFont();
window.onresize = function () {
    getFont();
}
function getFont() {
    var screenWidth = oHtml.clientWidth;
    if (screenWidth <= 320) {
        oHtml.style.fontSize = '23.7037px';
    } else if (screenWidth >= 750) {
        oHtml.style.fontSize = '40.4074px';
    } else {
        oHtml.style.fontSize = screenWidth / (750 / 40) + 'px';
    }
}

$('ul>li').each(function () {
    
    console.log(24);
    this.onclick = function () {
        console.log(4124);
        $('#responsive').toggle();
    }
})





var listAll = [];
if (listAll == []) {
    
}else{
    $('#btnClearAll').on('click', function () {
        $('.clear').remove();
    });
}

$('#btn').on('click', function () {
    $('#selected').remove();
    $('#title').remove();
})

$('.add').on('click', function () {

    $('.lin-list').append();
})






