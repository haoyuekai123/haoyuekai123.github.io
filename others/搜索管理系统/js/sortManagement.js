

// 载入列表数据
function loadList(){
	$.ajax({
		url:'./test.json',
		type:'get',
		data:{
			
		},
		success:function(res){
			var str='';
			for(var i=0;i<res.length;i++){
				str+='<li>'+
						'<span class="sort_checkbox">'+
							'<input type="checkbox" class="single_selection" />'+
						'</span>'+
						'<span class="sort_num">'+'193'+'</span>'+
						'<span class="sort_name">'+'省市'+'</span>'+
						'<span class="updata_time">'+'2013/5/20 17:28:46'+'</span>'+
						'<span class="sort_edit">'+
							'<i class="edit_btn"></i>'+
						'</span>'+
						'<span class="sort_note">'+'中国省/省辖市级分类标准'+'</span>'+
						'<span class="sub_count">'+'66'+'</span>'+
					'</li>';
			}
			$(".list_cont").html(str);
		},
		error:function(){
			
		}
	})
}

loadList()


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



// 点击进入类别信息页面
$(".list_cont").delegate(".sort_name","click",function(){
	var name=$(this).html();
	window.location="sortInfo.html?sortStadard="+name;
})