
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


$('.university ul').children('li').each(function () {
    var index = $(this).index();
    $(this).on('tap', function () {
        $(this).children('a').addClass('font-color').parent().siblings().children('a').removeClass('font-color');
        $('.tabcontent').eq(index).show(500).siblings('.tabcontent').hide();
        $.ajax({
            type:'post',
            url:'',
            dataType:'json',
            success:function(){
                
            }
        })
    })
})


$('#panel4').on('tap', 'li', function (e) {
    $(this).next().toggle();
    $(this).children().eq(0).toggleClass('mui-icon-arrowup mui-icon-arrowdown');
})


var ourscore2 = [82, 88, 73, 85, 82, 91, 83, 85, 82, 100], comparescore2 = [100, 88, 82, 93, 100, 88, 82, 93, 100, 88];
DrawRadar('one', '北京大学', ourscore2, comparescore2, '清华大学');
function DrawRadar(showId, compareinstitution, ourscore, comparescore, ourinstitution) {
    require.config({
        paths: {
            echarts: 'libs/echarts/'
        }
    });
    require(
        [
            'echarts',
            'echarts/theme/src',
            'echarts/chart/radar'
        ],
        function (ec, src) {
            var compare_institution_a = ec.init(document.getElementById(showId), src);

            radar_filled_options = {

                // Add title
                title: {
                    show: false
                },

                // Add tooltip
                tooltip: {
                    trigger: 'axis',
                    formatter: function (params) {
                        return params[0][3] + "<br/>" + params[1][1] + "得分：" + params[1][2] + "<br/>" + params[0][1] + "得分：" + params[0][2];
                    }
                },

                color: ['#ffbd5f', '#5693ff'],

                // Add legend
                legend: {
                    show: true,
                    x: 'center',
                    y: 225,
                    itemGap: 30,
                    data: [{
                        name: ourinstitution,
                        textStyle: {
                            color: '#494848',
                            fontSize: '14'
                        }
                    }, {
                        name: compareinstitution,
                        textStyle: {
                            color: '#494848',
                            fontSize: '14'
                        }
                    }]
                },

                // Setup polar coordinates
                polar: [{
                    radius: '60%',
                    axisLine: {
                        lineStyle: {
                            color: '#A4A4A4',
                        }
                    },
                    indicator: [
                        { text: '办学规模与层次', max: 150 },
                        { text: '国际竞争力', max: 150 },
                        { text: '重大项目与成果', max: 150 },
                        { text: '高端人才', max: 150 },
                        { text: '服务社会能力', max: 150 },
                        { text: '科学研究能力', max: 150 },
                        { text: '人才培养能力', max: 150 },
                        { text: '师资规模与结构', max: 150 },
                        { text: '办学资源', max: 150 },
                        { text: '学科布局与水平', max: 150 }
                    ],
                    name: {
                        show: true,
                        textStyle: {
                            color: "#494848",
                            fontSize: '12'
                        }
                    }
                }],

                // Enable drag recalculate
                calculable: false,

                // Add series
                series: [{
                    name: '贵校',
                    type: 'radar',
                    symbol: 'circle',
                    symbolSize: 0,

                    data: [

                        {
                            value: comparescore,
                            name: compareinstitution,
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        color: 'rgba(86,147,255,0.4)'
                                    },
                                    lineStyle: {
                                        color: '#5693ff',
                                        width: 2
                                    }
                                }
                            }
                        }, {
                            value: ourscore,
                            name: ourinstitution,
                            itemStyle: {
                                normal: {
                                    areaStyle: {
                                        color: 'rgba(255,189,95,0.5)'
                                    },
                                    lineStyle: {
                                        color: '#ffbd5f',
                                        width: 2
                                    }
                                }
                            }
                        }
                    ]
                }]
            };

            compare_institution_a.setOption(radar_filled_options);
            var ecConfig = require('echarts/config');
            compare_institution_a.on(ecConfig.EVENT.HOVER, function (param) {
                // var selected = param.name;
                //write your code here
                // console.log(selected);打印参数
                // hoverin();调用自定义函数
                // document.getElementById(‘wrong-message‘).innerHTML = str;
            });
            window.onresize = function () {
                setTimeout(function () {
                    compare_institution_a.resize();
                }, 200);
            }
        }
    );

}



// 模态框

$('td i').each(function () {
    $(this).on('tap', function () {
        popupDiv('detail_data');
    })
})

$('#detail_data').on('tap', '.close', function(){
    hideDiv('detail_data');
})


$('.school div').each(function(){
    $(this).on('tap', function(){
        $(this).addClass('b_color').siblings().removeClass('b_color');
    })
})




