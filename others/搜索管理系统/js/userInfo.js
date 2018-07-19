
var user='',name='';
//获取总条数,并重置分页
function getListNum(){
	var count=0;
	$.ajax({
		url:'./test.json',
		/*async: false,*/  //ajax同步
		data:{
			type:'userInfo'
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
function loadList(user,name,pageNumber,pageSize){
	$.ajax({
		url:'./test.json',
		data:{
			user:user,
			name:name,
			pageNumber:pageNumber,
			pageSize:pageSize   // 可选10,20,30,50
		},
		success:function(res){
			var str='';
			var len=res.length;
			for(var i=0;i<len;i++){
				str+='<li>'+
						'<span class="user">'+'test'+'</span>'+
						'<span class="name">'+'证券测试'+'</span>'+
						'<span class="time">'+'2013-9-24 12:24:36'+'</span>'+
						'<span class="sub">'+'14'+'</span>'+
						'<span class="cInfo">'+'50'+'</span>'+
						'<span class="sInfo">'+'27'+'</span>'+
					'</li>';
			}
			$(".list_cont").html(str);
		},
		error:function(data){
			console.log(data);
		}
	})
}

loadList(user,name,1,10);

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
		loadList(user,name,1,10);
		
		$(this).pagination('loaded');
	}
})


// 查找
$("#search_btn").on("click",function(){
	user=$("#user").val();
	name=$("#name").val();
	
	loadList(user,name,1,10);
})

// 刷新
$("#reload_btn").on("click",function(){
	loadList(user,name,1,10);
})
