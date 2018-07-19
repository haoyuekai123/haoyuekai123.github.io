

// 加载左侧导航列表
function loadNav(){
	$.ajax({
		url:'',
		data:{
			type:'net'
		},
		success:function(res){
			var len=res.length;
			var str='<li class="on" title="'+res[0].name+'">'+res[0].name+'</li>';
			for(var i=1;i<len;i++){
				str+='<li title="'+res[i].name+'">'+res[i].name+'</li>';
			}
			$(".left_nav").eq(0).html(str);
		},
		error:function(){
		
		}
	})
	$.ajax({
		url:'',
		data:{
			type:'sub'
		},
		success:function(res){
			var len=res.length;
			var str='<li class="on" title="'+res[0].name+'">'+res[0].name+'</li>';
			for(var i=1;i<len;i++){
				str+='<li title="'+res[i].name+'">'+res[i].name+'</li>';
			}
			//$(".left_nav").eq(1).html(str);
		},
		error:function(){
		
		}
	})
}

loadNav();

// 加载右侧信息源
function loadInfo(lookType){
	lookType=lookType||"all";
	var type='';
	if($(".item_box span.on").index()){
		type='sub';
	}else{
		type='net';
	}
	var name=$(".item_box span.on").html();
	$.ajax({
		url:'',
		data:{
			type:type,
			name:name,
			lookType:lookType // 全部信息源为'all';批处理任务为'part'。
		},
		success:function(res){
			
			
			/*加载数据渲染页面*/
			
		},
		error:function(data){
			console.log(data);
		}
	})
}
loadInfo();
// 选择网站或专题
$(".item_box span").on("click",function(){
	$(this).addClass("on").siblings().removeClass("on");
	var index=$(".item_box span.on").index();
	$(".left_nav").hide();
	$(".left_nav").eq(index).show();
	loadInfo();
})

$(".left_nav").delegate("li","click",function(){
	$(this).addClass("on").siblings().removeClass("on");
	loadInfo();
})

// 查看全部信息源或批处理任务
$("#look_all").on("click",function(){
	loadInfo();
})
$("#look_part").on("click",function(){
	loadInfo('part');
})
// 设置方式下拉框
$("#info_set").combobox({
	valueField:'value',
    textField:'text',
    data:[
    	  {text: '全部',value: '全部'},
		  {text: '方式2',value: '方式2'},
		  {text: '方式3',value: '方式3'}
		],
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$(this).val(newValue);
    }
})
// 导出项目下拉框
$("#serive_item").combobox({
	valueField:'value',
    textField:'text',
    data:[
    	  {text: 'word',value: 'word'},
		  {text: 'excel',value: 'excel'},
		  {text: 'pdf',value: 'pdf'}
		],
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$(this).val(newValue);
    }
})
// 状态下拉框
$(".info_state_input").combobox({
	valueField:'value',
    textField:'text',
    data:[
    	  {text: '1',value: '1'},
		  {text: '2',value: '2'},
		  {text: '3',value: '3'}
		],
    panelHeight:'auto',
    onChange:function(newValue, oldValue){
    	$(this).val(newValue);
    }
})

