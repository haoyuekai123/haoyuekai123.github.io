
//获取总条数,并重置分页
var sub_group='all'; // 专题组
var sub_name='all';  // 专题
var info_name='';    // 信息源名称，''为不限
var type=0;          // 0为显示全部提取结果，1为只显示自定义信息项的提取结果，2为只显示自动分类结果,3为两者都不提取

function getListNum(sub_group,sub_name,info_name,type){
	var count=0;
	$.ajax({
		url:'./test.json',
		/*async: false,*/  //ajax同步
		data:{
			sub_group:sub_group,
			sub_name:sub_name,
			info_name:info_name,
			type:type
		},
		success:function(res){
			count=res.length;
			$("#pp").pagination({
				total:count
			})
		}
	});
}
getListNum(sub_group,sub_name,info_name,type);
// 加载列表数据
function loadList(sub_group,sub_name,info_name,type,pageNumber,pageSize){
	$.ajax({
		url:'./test.json',
		data:{
			sub_group:sub_group,
			sub_name:sub_name,
			info_name:info_name,
			type:type,
			pageNumber:pageNumber,
			pageSize:pageSize   // 可选10,20,30,50
		},
		success:function(res){
			var str='';
			var len=res.length;
			for(var i=0;i<len;i++){
				str+='<li>'+
						'<div class="select_box"><input type="checkbox" class="single_select" /></div>'+
						'<h2>'+'广西生源地助学贷款受理实现乡镇代办'+'</h2>'+
						'<div class="list_info">'+
							'<div class="info_left">'+'[新闻]综合>华龙网>新闻频道>要点热文'+'</div>'+
							'<div class="info_right">'+
								'<a href="">内容快览</a>&nbsp;&nbsp;&nbsp;&nbsp;'+
								'<a href="javascript:void(0);" class="edit">编辑</a>'+
							'</div>'+
						'</div>'+
						'<div class="list_main">'+
							'<div class="list_left">'+
								'<p><span>记录编号：</span><span class="left_num c_aaa">'+'54056995'+'</span></p>'+
								'<p><span>采集时间：</span><span class="left_time c_aaa">'+'2016-8-24 23:56'+'</span></p>'+
								'<p><span>下载耗时：</span><span class="left_time2 c_aaa">'+'1.607秒'+'</span></p>'+
								'<p><span>正文大小：</span><span class="left_size c_aaa">'+'1788字节'+'</span></p>'+
								'<p><span>'+'0'+'</span>页 &nbsp;&nbsp;&nbsp;&nbsp; <span>'+'0'+'</span>图片</p>'+
							'</div>'+
							'<div class="list_right">'+
								'<p class="info">'+'央广网8月24日消息（记者：邓君洋；通讯员：杨展） 就读于辽宁工业大学的俞力兵……国第一，惠及全区64.87万名家庭经济困难的学生，保障了他们平等接受教育的权利。'+'</p>'+
								'<p><span class="author c_aaa">'+'邓君洋'+'</span> &nbsp; <span class="time c_aaa">'+'2016-8-24 11:27'+'</span></p>'+
								'<p>关键词： <span class="key_word c_aaa">'+'助学贷款，生源，乡镇，广西，实现，学生，代办，受理……'+'</span></p>'+
								'<p>'+
									'<a href="'+'网址'+'" target="_blank" title="'+'网址'+'" class="link">'+'网址'+'</a>'+
									'&nbsp;&nbsp;&nbsp;&nbsp;上级页面：'+
									'<a href="'+'上级网址'+'" class="pre_link" target="_blank" title="'+'上级网址'+'">'+'上级网址'+'</a>'+
								'</p>'+
								'<p>'+
									'<span class="c_C11C1C">临时变量： <i class="c_aaa variable">'+'&lt;暂无&gt;'+'</i></span>'+
									'<span class="c_C11C1C">人物： <i class="man c_aaa">'+'&lt;暂无&gt;'+'</i></span>'+
									'<span class="c_C11C1C">类别： <i class="type c_aaa">'+'&lt;暂无&gt;'+'</i></span>'+
								'</p>'+
								'<p>'+
									'<span class="c_C11C1C">跟帖数： <i class="comment c_aaa">'+'&lt;暂无&gt;'+'</i></span>'+
									'<span class="c_C11C1C">地区： <i class="area c_aaa">'+'290000'+'</i></span>'+
								'</p>'+
								'<p>省市：<span class="city">'+'广西'+'</span></p>'+
							'</div>'+
						'</div>'+
					'</li>';
			}
			$(".main").html(str);
		},
		error:function(data){
			console.log(data);
		}
	})
}

loadList(sub_group,sub_name,info_name,type,1,10);

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
		loadList(sub_group,sub_name,info_name,type,pageNumber,pageSize);
		
		$(this).pagination('loaded');
	}
})

// 显示提取结果
$(".my_check").on("click",function(){
	if($(".my_check").eq(0).prop("checked")){
		if($(".my_check").eq(1).prop("checked")){
			type=0;
		}else{
			type=1;
		}
	}else{
		if($(".my_check").eq(1).prop("checked")){
			type=2;
		}else{
			type=3;
		}
	}
	loadList(sub_group,sub_name,info_name,type,1,10);
})

// 过滤
$("#filter").on("click",function(){
	sub_group=$("#sub_group").val();
	sub_name=$("#sub").val();
	info_name=$("#sub_name").val();
	loadList(sub_group,sub_name,info_name,type,1,10);
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
// 专题下拉框
var sub_list=[
	{text:'全部专题',value:'全部专题'},
	{text:'专题1',value:'专题1'},
	{text:'专题2',value:'专题2'},
	{text:'专题3',value:'专题3'},
	{text:'专题4',value:'专题4'},
	{text:'专题5',value:'专题5'},
	{text:'专题6',value:'专题6'}
];
$("#sub").combobox({
	valueField:'value',
    textField:'text',
    data:sub_list,
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$(this).val(newValue);
    	
    }
})

// 选择
$("#allSelect").on("click",function(){
	if($(this).prop("checked")){
		$(".main .single_select").each(function(){
			$(this).prop("checked",true);
		})
	}else{
		$(".main .single_select").each(function(){
			$(this).prop("checked",false);
		})
	}	
})
$(".main").delegate(".single_select","click",function(){
	if($(this).prop("checked")){
		var isAllSelect=true;
		$(".main .single_select").each(function(){
			if(!$(this).prop("checked")){
				isAllSelect=false;
			}
		})
		if(isAllSelect){
			$("#allSelect").prop("checked",true);
		}
	}else{
		$("#allSelect").prop("checked",false);
	}
})

// 编辑
$(".main").delegate(".edit","click",function(){
	var num=$(this).parents("li").find(".left_num").html();
	window.location="editNewCollect.html?No="+num;
})
