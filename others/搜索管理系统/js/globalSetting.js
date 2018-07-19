
$("#main").tabs({
	plain:true,
	fit:true,
	border:false,
	tabPosition:'left',
	headerWidth:45,
	tabWidth:14,
	tabHeight:120
})


/*数据清洗设置*/

//获取总条数,并重置分页
function getListNum(){
	var count=0;
	$.ajax({
		url:'./test.json',
		/*async: false,*/  //ajax同步
		data:{
			
		},
		success:function(res){
			var str='';
			count=res.length;
			$("#pp").pagination({
				total:count
			})
		}
	});
}
getListNum();
// 加载列表数据
function loadList(pageNumber,pageSize){
	$.ajax({
		url:'./test.json',
		data:{
			pageNumber:pageNumber,
			pageSize:pageSize   // 可选10,20,30,50
		},
		success:function(res){
			var str='';
			var len=res.length;
			for(var i=0;i<len;i++){
				str+='<li>'+
						'<span class="type">'+'type'+'</span>'+
						'<span class="name">'+'name'+'</span>'+
						'<span class="detail">'+'detail'+'</span>'+
						'<span class="edit">'+'edit'+'</span>'+
					'</li>';
			}
			$(".tab1 .list_cont").html(str);
		},
		error:function(data){
			console.log(data);
		}
	})
}


loadList(1,10);

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
		loadList(pageNumber,pageSize);
		
		$(this).pagination('loaded');
	}
})


/*代理服务器设置*/

//获取总条数,并重置分页
function getListNum2(){
	var count=0;
	$.ajax({
		url:'./test.json',
		/*async: false,*/  //ajax同步
		data:{
			
		},
		success:function(res){
			var str='';
			count=res.length;
			$("#pp2").pagination({
				total:count
			})
		}
	});
}
getListNum2();
// 加载列表数据
function loadList2(pageNumber,pageSize){
	$.ajax({
		url:'./test.json',
		data:{
			pageNumber:pageNumber,
			pageSize:pageSize   // 可选10,20,30,50
		},
		success:function(res){
			var str='';
			var len=res.length;
			for(var i=0;i<len;i++){
				str+='<li>'+
						'<span class="name2">'+'name'+'</span>'+
						'<span class="list">'+'list'+'</span>'+
						'<span class="edit2">'+'edit'+'</span>'+
					'</li>';
			}
			$(".tab2 .list_cont").html(str);
		},
		error:function(data){
			console.log(data);
		}
	})
}


loadList2(1,10);

// 分页
$("#pp2").pagination({
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
		loadList2(pageNumber,pageSize);
		
		$(this).pagination('loaded');
	}
})
