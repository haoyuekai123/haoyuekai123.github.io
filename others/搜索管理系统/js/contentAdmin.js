

//获取总条数,并重置分页
function getListNum(subGroup,subName){
	var count=0;
	$.ajax({
		url:'./test.json',
		/*async: false,*/  //ajax同步
		data:{
			subGroup:subGroup,   //''表示不限制
			subName:subName   //''表示不限制
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
function loadList(subGroup,subName,pageNumber,pageSize){
	$.ajax({
		url:'./test.json',
		data:{
			subName:subName,   //''表示不限制
			subGroup:subGroup,   //''表示不限制
			pageNumber:pageNumber,
			pageSize:pageSize   // 可选10,20,30,50
		},
		success:function(res){
			var str='';
			var len=res.length;
			if(len){
				for(var i=0;i<len;i++){
					str+='<li>'+
							'<span class="sub_num">'+res[i].num+'</span>'+
							'<span class="sub_name">'+res[i].name+'</span>'+
							'<span class="sub_group">'+res[i].group+'</span>'+
							'<span class="save">'+res[i].save+'</span>'+
							'<span class="all_word">'+res[i].allWord+'</span>'+
							'<span class="sort">'+res[i].sort+'</span>'+
							'<span class="limit">'+res[i].limit+'</span>'+
							'<span class="validity">'+res[i].validity+'</span>'+
							'<span class="time">'+res[i].time+'</span>'+
							'<span class="sub_origen">'+res[i].origen+'</span>'+
							'<span class="note">'+res[i].note+'</span>'+
						'</li>'
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

var name='',group='';
loadList(name,group,1,10);


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
		loadList(name,group,pageNumber,pageSize);
		$(this).pagination('loaded');
	}
})

// 专题组下拉框
var sub_group_list=[
	{text:'全部专题组',value:'全部专题组'},
	{text:'未分组',value:'未分组'},
	{text:'新闻',value:'新闻'},
	{text:'论坛',value:'论坛'},
	{text:'博客',value:'博客'},
	{text:'微博',value:'微博'},
	{text:'电子刊报',value:'电子刊报'},
	{text:'视频',value:'视频'},
	{text:'评论',value:'评论'},
	{text:'全网新闻',value:'全网新闻'},
	{text:'配置信息源专用',value:'配置信息源专用'},
	{text:'人工上传',value:'人工上传'}
];

$("#sub_group").combobox({
	valueField:'value',
    textField:'text',
    data:sub_group_list,
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$(this).val(newValue);
    }
})

// 查找
$("#search_btn").on("click",function(){
	name=$("sub_name").val();
	group=$("#sub_group").val();
	loadList(name,group,1,10);
})
