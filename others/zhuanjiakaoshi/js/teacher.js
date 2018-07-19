


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
    width:500,   
    height:400,   
    modal:true,
    minimizable:false,
    maximizable:false,
    resizable:false
});
$('#dialog_box').window('close');

// 弹窗种类{添加--1/编辑--0}
var type=1;
// 添加
$(".add_btn").on("click",function(){
	$("#dialog_box").window("open");
	$("#dialog_box").window({
		title:'添加评卷教师'
	});
	$("#dialog_box").find("input").val("");
	type=1;
})
// 编辑
$(".user_list").delegate(".edit_btn","click",function(){
	$("#dialog_box").window("open");
	$("#dialog_box").window({
		title:'编辑评卷教师'
	});
	// 设置待编辑管理员信息
	$(".edit_name").val($(this).parent().parent().find(".list_name").html());
	$(".edit_position").val($(this).parent().parent().find(".list_position").html());
	$(".edit_tel").val($(this).parent().parent().find(".list_tel").html());
	$.ajax({
		url:'',
		data:{
			name:$(this).parent().parent().find(".list_name").html()
		},
		success:function(res){
			
			/*请求名字为data中name的管理员的账号和密码*/
			$(".edit_job_num").val();
			$(".edit_account").val();
			$(".edit_pwd").val();
		},
		error:function(){
			
		}
	})
	type=0;
})
$(".ensure_btn").on("click",function(){
	var name=$(".edit_name").val(),
		position=$(".edit_position").val(),
		tel=$(".edit_tel").val(),
		role=$(".edit_role").val(),
		account=$(".edit_account").val(),
		pwd=$(".edit_pwd").val();
	var oDate = new Date();
	var time=oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+oDate.getDate()+' '+oDate.getHours()+':'+oDate.getMinutes()+':'+oDate.getSeconds();
	
	if(!name){
		alert("请输入姓名");
		return false;
	}
	if(!position){
		alert("请输入职位");
		return false;
	}
	if(!tel){
		alert("请输入手机号码");
		return false;
	}
	if(!role){
		alert("请输入工号");
		return false;
	}
	if(!account){
		alert("请输入账号");
		return false;
	}
	if(!pwd){
		alert("请输入密码");
		return false;
	}
	
	if(type==1){  // 添加管理员
		$.ajax({
			url:'',
			data:{
				type:"add",
				name:name,
				position:position,
				tel:tel,
				role:role,
				account:account,
				pwd:pwd,
				time:time
			},
			success:function(){
				
				
				$('#dialog_box').window('close');
			},
			error:{
				
			}
		})
	}else{  // 编辑管理员
		$.ajax({
			url:'',
			data:{
				type:"edit",
				name:name,
				position:position,
				tel:tel,
				role:role,
				account:account,
				pwd:pwd
			},
			success:function(){
				
				
				$('#dialog_box').window('close');
			},
			error:{
				
			}
		})
	}
})
// 默认密码
$(".check_btn").on("click",function(){
	if($(this).prop("checked")){
		$(".edit_pwd").val("123456");         // 默认密码为“ 123456 ”
	}else{
		$(".edit_pwd").val("");
	}
})


// 搜索
$(".search_btn").on("click",function(){
	var search_name=$(".search_name").val();
	var search_tel=$(".search_tel").val();
	$.ajax({
		url:'',
		data:{
			type:"search",
			search_name:search_name,
			search_tel:search_tel
		},
		success:function(res){
			
			/*返回数据渲染到$(".user_list")中*/
			
		}
	})
})

// 删除评卷教师
$(".user_list").delegate(".remove_btn","click",function(){
	var that=this;
	$.ajax({
		url:'',
		data:{
			type:"remove",
			name:$(this).parent().parent().find(".list_name").html()
		},
		success:function(){
			$(that).parent().parent().remove();
		}
	})
	
})
// 禁用评卷教师
var isForbidden=false;
$(".user_list").delegate(".forbidden_btn","click",function(){
	var that=this;
	if(!isForbidden){
		$.ajax({
			url:'',
			data:{
				type:"forbidden",
				name:$(this).parent().parent().find(".list_name").html()
			},
			success:function(){
				
				$(that).parent().parent().find(".list_state").html("禁用");
				$(that).html("恢复")
				isForbidden=true;
			}
		})
	}else{
		$.ajax({
			url:'',
			data:{
				type:"recover",
				name:$(this).parent().parent().find(".list_name").html()
			},
			success:function(){
				
				$(that).parent().parent().find(".list_state").html("休息中");
				$(that).html("禁用");
				isForbidden=false;
			}
		})
	}
})

// 任务发放窗口
$('#task_window').window({
	title:'评卷任务设置',
    width:500,   
    height:400,   
    modal:true,
    minimizable:false,
    maximizable:false,
    resizable:false
});
$('#task_window').window('close');
// 评卷任务设置
$(".set_btn").on("click",function(){
	$('#task_window').window('open');
})
$("#task_add_btn").on("click",function(){
	var add_paper=$('#task_paper').val(),
		add_teacher=$("#task_teacher").val(),
		add_item=$("#task_item").val(),
		add_start_time=$('#task_start_time').val(),
		add_end_time=$('#task_end_time').val();
		
		//console.log(add_paper+"---"+add_teacher+"---"+add_item+"---"+add_start_time+"---"+add_end_time);
		
		$.ajax({
			url:'',
			data:{
				
			},
			success:function(res){
				$('#task_window').window('close');
			},
			error:function(data){
				console.log(data);
			}
		})
})
//选择框

// 试卷

var task_paper=[
	{
		label: '语文考试试卷',
		value: '语文考试试卷'
	},{
		label: '数学考试试卷',
		value: '数学考试试卷'
	},{
		label: '英语考试试卷',
		value: '英语考试试卷'
	}
]
$('#task_paper').combobox({
	required:true,
	missingMessage:'请选择考试试卷',
    valueField:'label',
    textField:'value',
    data:task_paper,
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$('#task_paper').val(newValue);
    }
});
// 评卷教师
var task_teacher=[
	{
		label: '张老师',
		value: '张老师'
	},{
		label: '李老师',
		value: '李老师'
	},{
		label: '韩老师',
		value: '韩老师'
	}
];
$('#task_teacher').combobox({
	required:true,
	missingMessage:'请选择评卷教师',
    valueField:'label',
    textField:'value',
    data:task_teacher,
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$('#task_teacher').val(newValue);
    }
});
// 评卷任务
var task_item=[
	{
		label: '问答题1',
		value: '问答题1'
	},{
		label: '问答题2',
		value: '问答题2'
	},{
		label: '问答题3',
		value: '问答题3'
	},{
		label: '问答题4',
		value: '问答题4'
	},{
		label: '客观题',
		value: '客观题'
	}
];
$('#task_item').combobox({
	required:true,
	missingMessage:'请选择评审任务，可多选',
    multiple:true,
    multiple:'，',
    valueField:'label',
    textField:'value',
    data:task_item,
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$('#task_item').val(newValue);
    }
});
// 设置任务时间
var start = {
    format: 'YYYY年MM月DD日',
    zIndex:10002,
    isTime:false,
    minDate: $.nowDate(0), //设定最小日期为当前日期
    isinitVal:false,
    initAddVal:[0],
    choosefun: function(elem,datas){
        end.minDate = datas; //开始日选好后，重置结束日的最小日期
    }
};
var end = {
    format: 'YYYY年MM月DD日',
    zIndex:10002,
    isTime:false,
    isinitVal:false,
    initAddVal:[1],
    choosefun: function(elem,datas){
        start.maxDate = datas; //将结束日的初始值设定为开始日的最大日期
    }
};
$('#task_start_time').jeDate(start);
$('#task_end_time').jeDate(end);