
// 载入列表数据
function loadList(task_force,name){ //参数为专题组
	name=name||'all';
	$.ajax({
		url:'',
		type:'get',
		data:{
			type:task_force,
			name:name
		},
		success:function(res){
			var str='';
			for(var i=0;i<res.length;i++){
				str+='<li>'+
						'<span class="list_checkbox">'+
							'<input type="checkbox" class="single_selection" />'+
						'</span>'+
						'<span class="list_num">'+res[i].num+'</span>'+
						'<span class="list_name">'+res[i].name+'</span>'+
						'<span class="list_group">'+res[i].group+'</span>'+
						'<span class="list_save">'+res[i].save+'</span>'+
						'<span class="list_sort">'+res[i].sort+'</span>'+
						'<span class="list_timing">'+res[i].timing+'</span>'+
						'<span class="list_validity">'+res[i].validity+'</span>'+
						'<span class="list_change">'+res[i].change+'</span>'+
						'<span class="list_standard">'+res[i].standard+'</span>'+
						'<span class="list_count1">'+res[i].count1+'</span>'+
						'<span class="list_count2">'+res[i].count2+'</span>'+
					'</li>';
			}
			$("list_cont").html(str);
		},
		error:function(){
			
		}
	})
}

loadList('全部')


// 专题组选择框
var task_force_list=[{text: '全部',value: '全部'},
					{text: '未分组',value: '未分组'},
					{text: '新闻',value: '新闻'},
					{text: '论坛',value: '论坛'},
					{text: '博客',value: '博客'},
					{text: '微博',value: '微博'},
					{text: '电子刊报',value: '电子刊报'},
					{text: '视频',value: '视频'},
					{text: '评论',value: '评论'},
					{text: '全网新闻',value: '全网新闻'},
					{text: '人工上传',value: '人工上传'},
					{text: '配置信息源专用',value: '配置信息源专用'}];
/*此处为假数据，应从后台加载*/
$.ajax({
	url:'',
	type:'get',
	data:{
		
	},
	success:function(res){
		
		/*task_force_list=[];*/
	},
	error:function(){
		
	}
})
$('#task_force').combobox({
    valueField:'value',
    textField:'text',
    data:task_force_list,
    panelHeight:'160px',
    onChange:function(newValue, oldValue){
    	$('#task_force').val(newValue);
    	/*重新载入列表数据*/
    	loadList(newValue);
    }
});

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

// 创建新的专题
$("#create_btn").on("click",function(){
	
})
// 删除选中专题
$("#remove_btn").on("click",function(){
	var nameArr=[];
	$(".list_cont .single_selection:checked").parent().parent().each(function(){
		nameArr.push($(this).find(".list_name").html());
	})
	$.ajax({
		url:'',
		data:{
			name:nameArr
		},
		success:function(res){
			
			/*判断是否删除成功*/
			$(".list_cont .single_selection:checked").parent().parent().remove();
		},
		error:function(){
			
		}
	})
})
// 刷新当前专题组专题
$("#reload_btn").on("click",function(){
	loadList($('#task_force').val());
})
// 查找专题
$("#search_btn").on("click",function(){
	if($("#search_txt").val()){
		loadList($('#task_force').val(),$("#search_txt").val());
	}
})

// 点击专题名称进入详细专题管理页面
$(".list_cont").delegate(".list_name","click",function(){
	
	
	window.location="./subDetail.html?name="+$(this).html();
})




