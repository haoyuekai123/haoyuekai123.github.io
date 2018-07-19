


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

// 搜索
$(".search_btn").on("click",function(){
	var search_name=$(".search_name").val();
	var search_type=$("#search_type").val();
	var search_teacher=$("#search_teacher").val();
	
	$.ajax({
		url:'',
		data:{
			search_name:search_name,
			search_type:search_type,
			search_teacher:search_teacher
		},
		success:function(res){
			
			/*返回数据渲染到$(".user_list")中*/
			
		}
	})
})

// 删除试题
$(".user_list").delegate(".remove_btn","click",function(){
	var test_num=$(this).parent().parent().find(".list_num").html();
	var that=this;
	$.ajax({
		url:'',
		data:{
			type:"remove",
			test_num:test_num
		},
		success:function(res){
			
			
			$(that).parent().parent().remove();
		}
	})
	
})

//窗口

$("#enter_window").window({
	title:"试题录入",
    width:"100%", 
    height:"100%",   
    modal:true,
    minimizable:false,
    maximizable:false,
    resizable:false,
    collapsible:true
});
$("#detail_window").window({
	title:"试题详情",
    width:"100%", 
    height:"100%",   
    modal:true,
    minimizable:false,
    maximizable:false,
    resizable:false,
    collapsible:true
});


$("#enter_window").window("close");
$("#detail_window").window("close");

// 录入
$(".add_btn").on("click",function(){
	$("#enter_window").window("open");
	
	
})
// 录入窗口内容
var paperType=[{
			label: '语文',
			value: '语文'
		},{
			label: '数学',
			value: '数学'
		},{
			label: '英语',
			value: '英语'
		}];
// 科目类型
function subject_type(){
	$('#paper_info_type').combobox({
	    valueField:'label',
	    textField:'value',
	    data:paperType,
	    panelHeight:'auto',
	    onChange:function(newValue, oldValue){
	    	$('#paper_info_type').val(newValue);
	    } 
	});
	$('#paper_info_type2').combobox({
	    valueField:'label',
	    textField:'value',
	    data:paperType,
	    panelHeight:'auto',
	    onChange:function(newValue, oldValue){
	    	$('#paper_info_type').val(newValue);
	    }
	});
}
subject_type();
// 添加科目类型
$("#add_paper_type,#add_paper_type2").on("click",function(){
	$("#add_type_window").window({
		title:"添加科目类型",
	    width:"240px", 
	    height:"150px",   
	    modal:true,
	    minimizable:false,
	    maximizable:false,
	    resizable:false,
	    collapsible:false
	});
	$(".add_type_name").val('');
})

// 确认添加
$(".add_type_btn").on("click",function(){
//	console.log($(".add_type_name").length)
	if($(".add_type_name").val()){
		
		$.ajax({
			url:'',
			data:{
				type:'add_type',
				name:$(".add_type_name").val()
			},
			success:function(res){
				paperType.push({
					label: $(".add_type_name").val(),
					value: $(".add_type_name").val()
				});	
				subject_type();
				$("#add_type_window").window("close");
			},
			error:function(res){
				console.log(res)
			}
		})
		
		
	}else{
		alert("请输入科目名称")
	}
})

//详情
$(".user_list").delegate(".detail_btn","click",function(){
	var test_num=$(this).parent().parent().find(".list_num").html();
	var that=this;
	$.ajax({
		url:'',
		data:{
			type:"change",
			test_num:test_num
		},
		success:function(res){
			$("#detail_window").window("open");
			
			
		}
	})
})







// 添加单选
$("#add_radio").on("click",function(){
	$(this).parent().parent().parent().find(".radio_item.hide").clone().removeClass("hide").appendTo($(".enter_objective_item"));
})

// 添加多选
$("#add_checked").on("click",function(){
	$(this).parent().parent().parent().find(".cheched_item.hide").clone().removeClass("hide").appendTo($(".enter_objective_item"));
})

// 添加主观题 
$("#add_subject").on("click",function(){
	$(this).parent().parent().parent().find(".subject_item.hide").clone().removeClass("hide").appendTo($(".enter_subjective_item"));
})

// 添加选项
$(".enter_objective_item").delegate(".add_item","click",function(){
	var $item=$(this).parent().parent().find(".item.clone").clone().removeClass("clone");
	$item.find(".hide.remove_item").removeClass("hide");
	$(this).parent().before($item);
})

// 删除选项
$(".enter_objective_item").delegate(".remove_item","click",function(){
	$(this).parent().remove();
})


// 确认录入
$("#enter_paper_ensure_btn").on("click",function(){
	
	
	$.ajax({
		url:'',
		data:{
			
		},
		success:function(){
			
			
			$("#enter_window").window("close");
		}
	})
})
