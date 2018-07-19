
var subGroup='',subName='';
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
function loadList(subGroup,subName,pageNumber,pageSize){
	$.ajax({
		url:'./test.json',
		data:{
			subGroup:subGroup,
			subName:subName,
			pageNumber:pageNumber,
			pageSize:pageSize   // 可选10,20,30,50
		},
		success:function(res){
			var str='';
			var len=res.length;
			for(var i=0;i<len;i++){
				str+='<li>'+
						'<span class="sub_num">'+'57'+'</span>'+
						'<span class="sub_group">'+'论坛'+'</span>'+
						'<span class="sub_name">'+'综合'+'</span>'+
						'<span class="save_as">'+'数据库'+'</span>'+
						'<span class="search_all">'+'√'+'</span>'+
						'<span class="sort">'+'√'+'</span>'+
						'<span class="limit_time">'+'2000'+'</span>'+
						'<span class="indate">'+'0'+'</span>'+
						'<span class="create_time">'+'2013-02-04'+'</span>'+
						'<span class="info_mum">'+'147'+'</span>'+
						'<span class="note_count">'+'496253'+'</span>'+
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

loadList(subGroup,subName,1,10);

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
		loadList(subGroup,subName,1,10);
		
		$(this).pagination('loaded');
	}
})


// 查找
$("#search_btn").on("click",function(){
	subGroup=$("#sub_group").val();
	subName=$("#sub_name").val();
	
	loadList(subGroup,subName,1,10);
})

// 刷新
$("#reload_btn").on("click",function(){
	loadList(subGroup,subName,1,10);
})

// 点击列表专题名称跳转到《专题设置》页面
$(".list_cont").delegate(".sub_name","click",function(){
	
	var name=$(this).html();
	window.location="subDetail.html?name="+name;
})

