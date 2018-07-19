
function getHref(){
    var s=decodeURI(window.location.search.substr(1));
    var arr1= s.split("&");
    var obj={};
    $(arr1).each(function(i){
        var arr=this.split("=");
        obj[arr[0]]=arr[1];
    });
    return obj;
}
var name=getHref().name;

$.ajax({
	url:'',
	type:'get',
	data:{
		type:'全部',
		name:name
	},
	success:function(res){
		
		
		$(".sub_name").html(name);
		/*读取数据库信息渲染页面*/
	},
	error:function(){
		
	}
})


// tabs
$("#my_tabs").tabs({
	border:'false'
})


$(window).on("resize",function(){
	$("#my_tabs").tabs('resize');
})

/*tab内下拉列表*/

// 媒体类型
var media_type_list=[{text: '其他',value: '其他'},
					{text: '娱乐',value: '娱乐'},
					{text: '军事',value: '军事'},
					{text: '民生',value: '民生'},
					{text: '体育',value: '体育'}];

$("#media_type").combobox({
    valueField:'value',
    textField:'text',
    data:media_type_list,
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$('#media_type').val(newValue);
    }
})

//搜集模式
var collect_mode_list=[{text: '日常更新',value: '日常更新'},
					   {text: '初始积累',value: '初始积累'}];
					
$("#collect_mode").combobox({
    valueField:'value',
    textField:'text',
    data:collect_mode_list,
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$('#collect_mode').val(newValue);
    }
})

//搜集模式
var sub_group_list=[{text: '全部',value: '全部'},
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
					
$("#sub_group").combobox({
    valueField:'value',
    textField:'text',
    data:sub_group_list,
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$('#sub_group').val(newValue);
    }
})



/*分类标准*/
$(function(){	
	//移到右边
	$('#add').click(function(){
		//先判断是否有选中
		if(!$("#select1 option").is(":selected")){			
			alert("请选择需要移动的选项")
		}
		//获取选中的选项，删除并追加给对方
		else{
			$('#select1 option:selected').appendTo('#select2');
		}	
	});
	
	//移到左边
	$('#remove').click(function(){
		//先判断是否有选中
		if(!$("#select2 option").is(":selected")){			
			alert("请选择需要移动的选项")
		}
		else{
			$('#select2 option:selected').appendTo('#select1');
		}
	});
	
	//全部移到右边
	$('#add_all').click(function(){
		//获取全部的选项,删除并追加给对方
		$('#select1 option').appendTo('#select2');
	});
	
	//全部移到左边
	$('#remove_all').click(function(){
		$('#select2 option').appendTo('#select1');
	});
	
	//双击选项
	$('#select1').dblclick(function(){ //绑定双击事件
		//获取全部的选项,删除并追加给对方
		$("option:selected",this).appendTo('#select2'); //追加给对方
	});
	
	//双击选项
	$('#select2').dblclick(function(){
		$("option:selected",this).appendTo('#select1');
	});
	
});

/*内容提取*/

// 下拉
var extract_item_type_list=[{text: '文字',value: '文字'},
					   {text: '图片',value: '图片'}];
					
$(".extract_item_type").combobox({
    valueField:'value',
    textField:'text',
    data:extract_item_type_list,
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$(this).val(newValue);
    }
})

var extract_item_num_list=[{text: '1',value: '1'},
					       {text: '2',value: '2'},
					       {text: '3',value: '3'},
					       {text: '4',value: '4'},
					       {text: '5',value: '5'},
					       {text: '6',value: '6'},
					       {text: '7',value: '7'}];
					
$(".extract_item_num").combobox({
    valueField:'value',
    textField:'text',
    data:extract_item_num_list,
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$(this).val(newValue);
    }
})

// 添加
$(".extract_add").on("click",function(){
	$(this).before($(".extract_item.hide").clone(true).removeClass("hide"));
})

// 删除
$("#info_exextract").delegate(".extract_item_remove","click",function(){
	$(this).parent().remove();
})

// 对象授权
$(function(){	
	//移到右边
	$('#add2').click(function(){
		//先判断是否有选中
		if(!$("#select1_2 option").is(":selected")){			
			alert("请选择需要移动的选项")
		}
		//获取选中的选项，删除并追加给对方
		else{
			$('#select1_2 option:selected').appendTo('#select2_2');
		}	
	});
	
	//移到左边
	$('#remove2').click(function(){
		//先判断是否有选中
		if(!$("#select2_2 option").is(":selected")){			
			alert("请选择需要移动的选项")
		}
		else{
			$('#select2_2 option:selected').appendTo('#select1_2');
		}
	});
	
	//全部移到右边
	$('#add_all2').click(function(){
		//获取全部的选项,删除并追加给对方
		$('#select1_2 option').appendTo('#select2_2');
	});
	
	//全部移到左边
	$('#remove_all2').click(function(){
		$('#select2_2 option').appendTo('#select1_2');
	});
	
	//双击选项
	$('#select1_2').dblclick(function(){ //绑定双击事件
		//获取全部的选项,删除并追加给对方
		$("option:selected",this).appendTo('#select2_2'); //追加给对方
	});
	
	//双击选项
	$('#select2_2').dblclick(function(){
		$("option:selected",this).appendTo('#select1_2');
	});
	
});


/*-----------保存和取消-------------------------*/

$(".tab_cancle").on("click",function(){
	javascript :history.back(-1);
})

$(".tab_save").on("click",function(){
	
})
