
//获取总条数,并重置分页
function getListNum(){
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
						'<span class="type">'+'专题'+'</span>'+
						'<span class="jur_name">'+'专题管理'+'</span>'+
						'<span class="role">'+'2'+'</span>'+
						'<span class="user">'+'1'+'</span>'+
						'<span class="note">'+'利用自定义的专题类别来组织和管理要搜集的信息'+'</span>'+
					'</li>';
			}
			$(".list_cont").html(str);
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
		loadList(pageNumber,pageSize);
		
		$(this).pagination('loaded');
	}
})
