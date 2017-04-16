

// 点击模块显示掩藏
$('ul>li').each(function () {
    var _this = $(this);
    _this.on('click', function () {
        _this.next().toggle();
        _this.children().toggleClass('mui-icon-arrowdown mui-icon-arrowup')
    })
})


mui.init();
window.onload = function () {

    var tr = $('.moduleOne tbody tr').not(":last");
    var sum = $('.sum');
    console.log(tr);
    //为每行元素添加事件
    for (var i = 0; i < tr.length; i++) {
        //将点击事件绑定到tr元素
        tr.eq(i).on("tap", function (e) {
            e.stopPropagation();
            var sumValue = sum.val();
            if (sumValue == 100) {
                //alert('总计大于100,请重新输入');
                return false;
            }
            var el = e.target;
            var cls = el.className; //触发元素的class
            //console.log(this);
            var countInout = this.getElementsByTagName('input')[0];
            var value = parseFloat(countInout.value); //数目
            //console.log(value);
            //通过判断触发元素的class确定用户点击了哪个元素
            switch (cls) {
                case 'add': //点击了加号       
                    var newValue = value + 0.1;
                    newValue = newValue.toFixed(1);
                    countInout.value = newValue;
                    // console.log(countInout.value);
                    break;
                case 'sub': //点击了减号
                    //console.log(value);
                    if (value == 0) {
                        countInout.value == '0.0';
                        return false;
                    }
                    var newValue = value - 0.1;
                    newValue = newValue.toFixed(1);
                    countInout.value = newValue;
                    break;
                default:
                    return false;
                    break;
            }
            getTotal();
        })
    }
    $('.num').on('blur', function (e) {
        e.stopPropagation();
        var sumValue = sum.val();
        console.log(sumValue);
        if (sumValue >= 100) {
            //alert('总计大于100,请重新输入');
            return false;
        }
        var numberValue = Number($(this).val());
        $(this).val(numberValue.toFixed(1));
        getTotal();
    })
    function getTotal() {
        var price = 0;
        for (var i = 0, len = tr.length; i < len; i++) {
            //console.log(tr.eq(i).find('input'));
            price += parseFloat(tr.eq(i).find('input').val());
        }
        //	console.log(price);
        sum.val(price.toFixed(1));
        return price.toFixed(1);
    }


    //按钮点击提交事件
    $('.moduleOne').on("tap", '#submit', function () {
        var sumValue = sum.val();
        if (sumValue < 100) {
            alert("合计小于100，请重新输入");
            return false;
        } else if (sumValue > 100) {
            alert("合计大于100，请重新输入");
            return false;
        }
    })

}


