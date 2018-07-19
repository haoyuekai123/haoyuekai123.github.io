
// 载入分组信息
$.ajax({
	url:'',
	type:'get',
	data:{
		type:'group'
	},
	success:function(res){
		var str='';
		var len=res.length
		for(var i=0;i<len;i++){
			str+='<li>'+
					'<span class="group_checkbox">'+
						'<input type="checkbox" class="single_selection" />'+
					'</span>'+
					'<span class="group_name">博客</span>'+
					'<span class="group_count">4</span>'+
					'<span class="group_state">博客分组的说明</span>'+
					'<span class="group_edit">'+
						'<a href="javascript:void(0);" class="easyui-linkbutton group_edit_btn" data-options="iconCls:'+'icon-edit'+'">编辑</a>'+
					'</span>'+
				'</li>';
		}
		//$("list_cont").html(str);
	},
	error:function(){
		
	}
})

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


// 删除选中分组
$("#remove_btn").on("click",function(){
	var nameArr=[];
	$(".list_cont .single_selection:checked").parent().parent().each(function(){
		nameArr.push($(this).find(".group_name").html());
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

// 添加分组
$("#add_btn").on("click",function(){
	
})

// 编辑分组
$(function(){
	var isEdit=true;
    $(".list_cont").delegate(".group_edit_btn","click",function(){
		if(isEdit){
			$(this).parent().parent().find(".group_name").attr("contenteditable",true).css({
				border:'1px solid #A5C7FE'
			}).focus();
			$(this).parent().parent().find(".group_state").attr("contenteditable",true).css({
				border:'1px solid #A5C7FE'
			});
			$(".group_edit_btn").linkbutton({disabled:true});
			$(this).linkbutton({
				text:"确定",
				disabled:false
			});
		}else{
			$(this).parent().parent().find(".group_name").attr("contenteditable",false).css({
				border:'none'
			});
			$(this).parent().parent().find(".group_state").attr("contenteditable",false).css({
				border:'none'
			});
			$(".group_edit_btn").linkbutton({disabled:false});
			$(this).linkbutton({
				text:"编辑",
				disabled:false
			});
		}
		isEdit=!isEdit;
	})
});


