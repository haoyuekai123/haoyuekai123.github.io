
// 日志集月份选择
$("#logs").jeDate({
    isinitVal:true,
    format: 'YYYY年MM月'
});


var logs=$("#logs").val(),
	type=$("#type").val(),
	fun=$("#fun").val(),
	user=$("#user").val(),
	obj=$("#obj").val(),
	edit=$("#edit").val(),
	time=$("#time").val();



//获取总条数,并重置分页
function getListNum(logs,type,fun,user,obj,edit,time){
	var count=0;
	$.ajax({
		url:'./test.json',
		/*async: false,*/  //ajax同步
		data:{
			logs:logs,
			type:type,
			fun:fun,
			user:user,
			obj:obj,
			edit:edit,
			time:time
		},
		success:function(res){
			var str='';
			count=res.length;
			$("#search_count").html(count);
			$("#pp").pagination({
				total:count
			})
		}
	});
}
getListNum(logs,type,fun,user,obj,edit,time);
// 加载列表数据
function loadList(logs,type,fun,user,obj,edit,time,pageNumber,pageSize){
	$.ajax({
		url:'./test.json',
		data:{
			logs:logs,
			type:type,
			fun:fun,
			user:user,
			obj:obj,
			edit:edit,
			time:time,
			pageNumber:pageNumber,
			pageSize:pageSize   // 可选10,20,30,50
		},
		success:function(res){
			var str='';
			var len=res.length;
			if(len){
				for(var i=0;i<len;i++){
					str+='<li>'+
							'<span class="edit_checkbox">'+
								'<input type="checkbox" class="single_selection" />'+
							'</span>'+
							'<span class="edit_type">'+'网页访问'+'</span>'+
							'<span class="fun_module">'+'统计：每日搜集记录数'+'</span>'+
							'<span class="edit_user">'+'admin'+'</span>'+
							'<span class="ip_address">'+'127.127.159.256'+'</span>'+
							'<span class="url">'+'http://localhost/lexoconsole/topic.html'+'</span>'+
							'<span class="quote_page">'+'http://localhost/lexoconsole/topic.html'+'</span>'+
							'<span class="edit">'+''+'</span>'+
							'<span class="edit_obj">'+''+'</span>'+
							'<span class="obj_count">'+'0'+'</span>'+
							'<span class="edit_time">'+'2016/8/24 23:12:45'+'</span>'+
						'</li>';
				}
			}else{
				str='<li style="color:#80000">未找到符合条件的信息</li>';
			}
			$(".list_cont").html(str);
		},
		error:function(data){
			console.log(data);
		}
	})
}


loadList(logs,type,fun,user,obj,edit,time,1,10);


//分页
$("#pp").pagination({
	//total:200,// 信息总条数
	layout:['list','sep','first','prev','links','next','last','sep','manual'],
	beforePageText:'跳转到&nbsp;',
	afterPageText:'&nbsp;页',
	links:7,
	displayMsg:'第 {from} 条 —— 第 {to} 条，共 {total} 条',
	onSelectPage:function(pageNumber, pageSize){
		$(this).pagination('loading');
		
		/*重新载入数据*/
		alert('页码:'+pageNumber+',每页:'+pageSize+'条');
		loadList(logs,type,fun,user,obj,edit,time,pageNumber,pageSize);
		$(this).pagination('loaded');
	}
})

// 列表选择
$(".all_selection").on("click",function(){
	if($(this).prop("checked")){
		$(".list_cont .single_selection").each(function(){
			$(this).prop("checked",true);
		})
	}else{
		$(".list_cont .single_selection").each(function(){
			$(this).prop("checked",false);
		})
	}	
})
$(".list_cont").delegate(".single_selection","click",function(){
	if($(this).prop("checked")){
		var isAllSelect=true;
		$(".list_cont .single_selection").each(function(){
			if(!$(this).prop("checked")){
				isAllSelect=false;
			}
		})
		if(isAllSelect){
			$(".all_selection").prop("checked",true);
		}
	}else{
		$(".all_selection").prop("checked",false);
	}
})


// 日志集月份选择
$("#logs").jeDate({
    isinitVal:true,
    format: 'YYYY年MM月'
});

// 类型下拉框
var typeList=[
	{text:'全部',value:'全部'},
	{text:'网页访问',value:'网页访问'},
	{text:'类型2',value:'类型2'},
	{text:'类型3',value:'类型3'},
	{text:'类型4',value:'类型4'},
	{text:'类型5',value:'类型5'},
	{text:'类型6',value:'类型6'}
];
$("#type").combobox({
	valueField:'value',
    textField:'text',
    data:typeList,
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$(this).val(newValue);
    	
    }
})

// 时间范围
var timeList=[
	{text:'不限',value:'不限'},
	{text:'一周之内',value:'一周之内'},
	{text:'三天内',value:'三天内'},
	{text:'今日',value:'今日'}
];
$("#time").combobox({
	valueField:'value',
    textField:'text',
    data:timeList,
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$(this).val(newValue);
    	
    }
})



// 过滤
$("#search_btn").on("click",function(){
	logs=$("#logs").val();
	type=$("#type").val();
	fun=$("#fun").val();
	user=$("#user").val();
	obj=$("#obj").val();
	edit=$("#edit").val();
	time=$("#time").val();
		
	loadList(logs,type,fun,user,obj,edit,time,1,10);
	
})


// 删除
$("#remove_btn").on("click",function(){
	logs=$("#logs").val();
	$.ajax({
		url:'',
		data:{
			logs:logs
		},
		success:function(res){
			
			loadList(logs,type,fun,user,obj,edit,time,1,10);
		},
		error:function(res){
			console.log(res);
		}
	})
})
