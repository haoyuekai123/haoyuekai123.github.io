


// 分页
$("#pp").pagination({
	total:2000,// 信息总条数
	layout:['list','sep','first','prev','links','next','last','sep','manual'],
	beforePageText:'跳转到&nbsp;',
	afterPageText:'&nbsp;页',
	links:7,
	displayMsg:'第 {from} 条 —— 第 {to} 条，共 {total} 条',
	onSelectPage:function(pageNumber, pageSize){
		$(this).pagination('loading');
		
		/*重新载入数据*/
		alert('页码:'+pageNumber+',每页:'+pageSize+'条');
		
		$(this).pagination('loaded');
	}
})

// 窗口
$('#dialog_box').window({   
    width:800,   
    height:600,   
    modal:true,
    minimizable:false,
    //maximizable:false,
    resizable:false
});
$('#dialog_box').window('close');
// 窗口下选项卡
$('#tabs').tabs({   
    border:false,   
    onSelect:function(title){   
        //alert(title+' is selected');
        
    }
});  

// 修改分数窗口
$('#dialog_box2').window({   
    width:300,   
    height:200,   
    modal:true,
    minimizable:false,
    maximizable:false,
    resizable:false,
    title:'修改考生成绩'
});
$('#dialog_box2').window('close');

// 详情
$(".user_list").delegate(".detail_btn","click",function(){
	$("#dialog_box").window("open");
	$("#dialog_box").window({
		title:'考生信息'
	});
	$.ajax({
		url:'',
		data:{
			
		},
		success:function(res){
			
			
			/*判断该考生成绩是否被修改过，是，$("#change_score").html("已修改").prop("disabled",true);，否$("#change_score").html("修改").prop("disabled",false);*/
			$("#change_score").html("修改").prop("disabled",false);
		}
	})
})
// 修改分数
$("#change_score").on("click",function(){
	$('#dialog_box2').window('open');
})
$("#change_btn_click").on("click",function(){
	var administator_pwd=$(".administator_pwd").val(),
		change_score=$(".change_score_input").val(),
		change_man=$(".change_man_input").val();
	$.ajax({
		url:'',
		data:{
			pwd:administator_pwd,
			score:change_score,
			change_man:change_man
		},
		success:function(){
			$(".detail_score").html(change_score);
			$("#change_score").html("已修改").prop("disabled",true);
			$(".change_man").show().find("i").html(change_man);
			$('#dialog_box2').window('close');
		}
	})
})

// 选择时间
var start = {
    format: 'YYYY年MM月DD日',
    isTime:false,
    maxDate: $.nowDate(0), //设定最小日期为当前日期
    isinitVal:true,
    initAddVal:[-365],
    choosefun: function(elem,datas){
        end.minDate = datas; //开始日选好后，重置结束日的最小日期
    }
};
var end = {
    format: 'YYYY年MM月DD日',
    isTime:false,
    maxDate: $.nowDate(0),
    isinitVal:true,
    initAddVal:[0],
    choosefun: function(elem,datas){
        start.maxDate = datas; //将结束日的初始值设定为开始日的最大日期
    }
};
$('#start_time').jeDate(start);
$('#end_time').jeDate(end);
// 搜索
$(".search_btn").on("click",function(){
	var search_name=$(".search_name").val(),
	    search_exam_card=$(".search_exam_card").val(),
	    search_paper_type=$("#paper_type").val(),
	    search_start_time=$('#start_time').val(),
	    search_end_time=$('#end_time').val();
	//console.log($('#start_time').val()+"------"+$('#end_time').val()+"----"+$("#paper_type").val())
	$.ajax({
		url:'',
		data:{
			type:"search",
			search_name:search_name,
			search_exam_card:search_exam_card,
			search_paper_type:search_paper_type,
			search_start_time:search_start_time,
			search_end_time:search_end_time
		},
		success:function(res){
			
			/*返回数据渲染到$(".user_list")中*/
			
		}
	})
})

