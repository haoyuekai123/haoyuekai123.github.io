
var subGroup='',subName='',infoName='';
//获取总条数,并重置分页
function getListNum(){
	var count=0;
	$.ajax({
		url:'./test.json',
		/*async: false,*/  //ajax同步
		data:{
			type:'detailInfo'
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
function loadList(subGroup,subName,infoName,pageNumber,pageSize){
	$.ajax({
		url:'./test.json',
		data:{
			subGroup:subGroup,
			subName:subName,
			infoName:infoName,
			pageNumber:pageNumber,
			pageSize:pageSize   // 可选10,20,30,50
		},
		success:function(res){
			var str='';
			var len=res.length;
			for(var i=0;i<len;i++){
				str+='<li>'+
						'<span class="info_num">'+'85695'+'</span>'+
						'<span class="sub_group">'+'论坛'+'</span>'+
						'<span class="sub_name">'+'综合'+'</span>'+
						'<span class="info_name">'+'东方财富股吧>股吧总版'+'</span>'+
						'<span class="address">'+'https://guba.eastmoney.com'+'</span>'+
						'<span class="domain">'+'eastmoney.com'+'</span>'+
						'<span class="top_domain">'+'eastmoney.com'+'</span>'+
						'<span class="info_type">'+'网站'+'</span>'+
						'<span class="create_man">'+'admin'+'</span>'+
						'<span class="set_man">'+'admin'+'</span>'+
						'<span class="note_count">'+'301915'+'</span>'+
						'<span class="state"><span class="state_img '+''+'"></span></span>'+
					'</li>';
			}
			$(".list_cont").html(str);
		},
		error:function(data){
			console.log(data);
		}
	})
}

loadList(subGroup,subName,infoName,1,10);

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

var subGroup='',subName='',infoName='';
// 查找
$("#search_btn").on("click",function(){
	subGroup=$("#sub_group").val();
	subName=$("#sub_name").val();
	infoName=$("#info_name").val();
	
	loadList(subGroup,subName,infoName,1,10)
})

// 刷新
$("#reload_btn").on("click",function(){
	loadList(subGroup,subName,infoName,1,10);
})
