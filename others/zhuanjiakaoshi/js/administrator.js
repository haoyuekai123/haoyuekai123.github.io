


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
		title:'添加管理员'
	});
	$("#dialog_box").find("input").val("");
	type=1;
})
// 编辑
$(".user_list").delegate(".edit_btn","click",function(){
	$("#dialog_box").window("open");
	$("#dialog_box").window({
		title:'编辑管理员'
	});
	// 设置待编辑管理员信息
	$(".edit_name").val($(this).parent().parent().find(".list_name").html());
	$(".edit_position").val($(this).parent().parent().find(".list_position").html());
	$(".edit_tel").val($(this).parent().parent().find(".list_tel").html());
	$(".edit_role").val($(this).parent().parent().find(".list_role").html());
	$.ajax({
		url:'',
		data:{
			name:$(this).parent().parent().find(".list_name").html()
		},
		success:function(res){
			
			/*请求名字为data中name的管理员的账号和密码*/
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
			
//	console.log(time);
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
		alert("请输入管理员权限");
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
			search_name:search_name,
			search_tel:search_tel
		},
		success:function(res){
			
			/*返回数据渲染到$(".user_list")中*/
			
		}
	})
})
