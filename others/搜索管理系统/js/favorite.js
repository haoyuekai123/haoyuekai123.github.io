
//获取总条数,并重置分页
function getListNum(name,address){
	var count=0;
	$.ajax({
		url:'./test.json',
		/*async: false,*/  //ajax同步
		data:{
			netName:name,   //''表示不限制
			netAddress:address   //''表示不限制
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
getListNum('','')
// 加载列表数据
function loadList(name,address,pageNumber,pageSize){
	$.ajax({
		url:'',
		data:{
			netName:name,   //''表示不限制
			netAddress:address,   //''表示不限制
			pageNumber:pageNumber,
			pageSize:pageSize   // 可选10,20,30,50
		},
		success:function(res){
			var str='';
			var len=res.length;
			/*for(var i=0;i<len;i++){
				str+='<li>'+
						'<span class="net_checkbox">'+
							'<input type="checkbox" class="single_selection" />'+
						'</span>'+
						'<span class="net_name"><a href="//'+res.address+'" target="_blank">'+res.name+'</a></span>'+
						'<span class="net_address"><a href="//'+res.address+'" target="_blank">'+res.address+'</a></span>'+
						'<span class="net_sub"><a href="'+'#'+'" target="_self">'+res.sub+'</a></span>'+
						'<span class="net_info"><a href="'+'#'+'" target="_self">'+res.info+'</a></span>'+
						'<span class="net_realm">'+res.realm+'</span>'+
					'</li>'
			}
			$(".list_cont").html(str);*/
		},
		error:function(data){
			console.log(data);
		}
	})
}

var name='',address='';


loadList(name,address,1,10);

// 分页
$("#pp").pagination({
	/*total:200,// 信息总条数*/
	layout:['list','sep','first','prev','links','next','last','sep','manual'],
	beforePageText:'跳转到&nbsp;',
	afterPageText:'&nbsp;页',
	links:7,
	displayMsg:'第 {from} 条 —— 第 {to} 条，共 {total} 条',
	onSelectPage:function(pageNumber, pageSize){
		$(this).pagination('loading');
		
		/*重新载入数据*/
		alert('页码:'+pageNumber+',每页:'+pageSize+'条');
		loadList(name,address,pageNumber,pageSize);
		
		$(this).pagination('loaded');
	}
})

// 查找
$("#search_btn").on("click",function(){
	name=$("#search_name").val(),
	address=$("#search_address").val();
	getListNum(name,address);
	loadList(name,address,1,10);
})

// 刷新
$("#reload_btn").on("click",function(){
	name='';
	address='';
	getListNum(name,address);
	loadList(name,address,1,10);
})

// 设置人
$("#setman_btn").on("click",function(){
	
})
//导出
$("#derive_btn").on("cllick",function(){
	
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