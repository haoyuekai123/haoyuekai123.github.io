
// 注册日期时间选择
var start = {
    format: 'YYYY-MM-DD',
    maxDate: $.nowDate(0), //设定最大日期为当前日期
    choosefun: function(elem,datas){
        end.minDate = datas; //开始日选好后，重置结束日的最小日期
    }
};
var end = {
    format: 'YYYY-MM-DD',
    maxDate: $.nowDate(0), //设定最大日期为当前日期
    choosefun: function(elem,datas){
        start.maxDate = datas; //将结束日的初始值设定为开始日的最大日期
    }
};
$('#startTime').jeDate(start);
$('#endTime').jeDate(end);

// 用户状态
var stateList=[
	{text:'全部',value:'全部'},
	{text:'正常',value:'正常'},
	{text:'注销',value:'注销'}
]

$("#state").combobox({
	valueField:'value',
    textField:'text',
    data:stateList,
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$(this).val(newValue);
    	
    }
})