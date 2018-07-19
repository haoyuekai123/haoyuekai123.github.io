
var myChart = echarts.init(document.getElementById("myChart"));

var option = {
    backgroundColor: '',
    tooltip : {
        formatter: "{a} <br/>{c}%"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true}
        }
    },
    series : [{
            name:'CPU使用率',
            type:'gauge',
            center: ['150px', '65%'],
            radius : '150px',
            min:0,
            max:100,
            startAngle:150,
            endAngle:30,
            splitNumber:10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:5,
                shadowColor : '#800000', //默认透明
                shadowBlur: 5
            },
            title : {
                offsetCenter: [0, '-40%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontStyle: 'normal',
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            detail : {
//              backgroundColor: 'rgba(30,144,255,0.8)',
//              borderWidth: 1,
//              borderColor: '#1b1b1b',
                shadowColor : '#800000', //默认透明
                shadowBlur: 5,
                width: 80,
                height:30,
                offsetCenter: [0, "20%"],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#1b1b1b',
                    fontSize: '24px'
                }
            },
            data:[{value: 1.5, name: 'CPU'}]
       },{
            name:'内存占用',
            type:'gauge',
            center: ['450px', '65%'],
            radius : '150px',
            min:0,
            max:100,
            startAngle:150,
            endAngle:30,
            splitNumber:10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:5,
                shadowColor : '#800000', //默认透明
                shadowBlur: 5
            },
            title : {
                offsetCenter: [0, '-40%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontStyle: 'normal',
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            detail : {
//              backgroundColor: 'rgba(30,144,255,0.8)',
//              borderWidth: 1,
//              borderColor: '#1b1b1b',
                shadowColor : '#800000', //默认透明
                shadowBlur: 5,
                width: 80,
                height:30,
                offsetCenter: [0, "20%"],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#1b1b1b',
                    fontSize: '24px'
                }
            },
            data:[{value: 1.5, name: '内存占用'}]
       },{
            name:'磁盘队列',
            type:'gauge',
            center: ['750px', '65%'],
            radius : '150px',
            min:0,
            max:100,
            startAngle:150,
            endAngle:30,
            splitNumber:10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:5,
                shadowColor : '#800000', //默认透明
                shadowBlur: 5
            },
            title : {
                offsetCenter: [0, '-40%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontStyle: 'normal',
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            detail : {
//              backgroundColor: 'rgba(30,144,255,0.8)',
//              borderWidth: 1,
//              borderColor: '#1b1b1b',
                shadowColor : '#800000', //默认透明
                shadowBlur: 5,
                width: 80,
                height:30,
                offsetCenter: [0, "20%"],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#1b1b1b',
                    fontSize: '24px'
                }
            },
            data:[{value: 1.5, name: '磁盘队列长度'}]
       },{
            name:'空间',
            type:'gauge',
            center: ['1050px', '65%'],
            radius : '150px',
            min:0,
            max:100,
            startAngle:150,
            endAngle:30,
            splitNumber:10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:5,
                shadowColor : '#800000', //默认透明
                shadowBlur: 5
            },
            title : {
                offsetCenter: [0, '-40%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontStyle: 'normal',
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            detail : {
//              backgroundColor: 'rgba(30,144,255,0.8)',
//              borderWidth: 1,
//              borderColor: '#1b1b1b',
                shadowColor : '#800000', //默认透明
                shadowBlur: 5,
                width: 80,
                height:30,
                offsetCenter: [0, "20%"],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#1b1b1b',
                    fontSize: '24px'
                }
            },
            data:[{value: 1.5, name: '数据库大小\n可用空间'}]
        }
    ]
};

clearInterval(myChart.timeTicket);
myChart.timeTicket = setInterval(function () {
	
	/*图表数据动态载入*/
    option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    option.series[1].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    option.series[2].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    option.series[3].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    
    myChart.setOption(option, true);
},2000);


var option2={
	backgroundColor: '',
    tooltip : {
        formatter: "{a} <br/>{c} {b}"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true}
        }
    },
    series : [
        {
            name:'信息采集源',
            type:'gauge',
            center: ['150px', '65%'],
            radius : '150px',
            min:0,
            max:100,
            startAngle:150,
            endAngle:30,
            splitNumber:10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:5,
                shadowColor : '#800000', //默认透明
                shadowBlur: 5
            },
            title : {
                offsetCenter: [0, '-40%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontStyle: 'normal',
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            detail : {
//              backgroundColor: 'rgba(30,144,255,0.8)',
//              borderWidth: 1,
//              borderColor: '#1b1b1b',
                shadowColor : '#800000', //默认透明
                shadowBlur: 5,
                width: 80,
                height:30,
                offsetCenter: [0, "20%"],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#1b1b1b',
                    fontSize: '24px'
                }
            },
            data:[{value: 1.5, name: '信息采集源'}]
       },{
            name:'采集任务',
            type:'gauge',
            center: ['450px', '65%'],
            radius : '150px',
            min:0,
            max:100,
            startAngle:150,
            endAngle:30,
            splitNumber:10,
            axisLine: {            // 坐标轴线
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                    width: 2,
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            axisLabel: {            // 坐标轴小标记
                textStyle: {       // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            axisTick: {            // 坐标轴小标记
                length :12,        // 属性length控制线长
                lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            splitLine: {           // 分隔线
                length :20,         // 属性length控制线长
                lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    width:3,
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            pointer: {
                width:5,
                shadowColor : '#800000', //默认透明
                shadowBlur: 5
            },
            title : {
                offsetCenter: [0, '-40%'],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontStyle: 'normal',
                    color: '#1b1b1b',
                    shadowColor : '#800000', //默认透明
                    shadowBlur: 10
                }
            },
            detail : {
//              backgroundColor: 'rgba(30,144,255,0.8)',
//              borderWidth: 1,
//              borderColor: '#1b1b1b',
                shadowColor : '#800000', //默认透明
                shadowBlur: 5,
                width: 80,
                height:30,
                offsetCenter: [0, "20%"],       // x, y，单位px
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    color: '#1b1b1b',
                    fontSize: '24px'
                }
            },
            data:[{value: 1.5, name: '采集任务'}]
       }
    ]
}


var myChart2=echarts.init(document.getElementById("myChart2"));

clearInterval(myChart2.timeTicket);
myChart2.timeTicket = setInterval(function () {
	
	/*图表数据动态载入*/
    option2.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    option2.series[1].data[0].value = (Math.random() * 100).toFixed(2) - 0;
    
    myChart2.setOption(option2, true);
},2000);