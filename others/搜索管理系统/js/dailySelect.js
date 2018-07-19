

//统计频率
var frequencyList=[
	{text:'月报',value:'月报'},
	{text:'周报',value:'周报'},
	{text:'日报',value:'日报'}
]

$("#frequency").combobox({
	valueField:'value',
    textField:'text',
    data:frequencyList,
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$(this).val(newValue);
    	
    }
})

// 开始日期选择
$("#startTime").jeDate({
    isinitVal:true,
    format: 'YYYY-MM-DD',
    maxDate:$.nowDate(0)
});

// 内容区域选项卡
$("#tt").tabs({
	fit:true,
	plain:true,
    border:false
});
