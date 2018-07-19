
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

var sortStadard=getHref().sortStadard;
$(".nowSort").find("span").html(sortStadard);


//获取总条数,并重置分页
function getListNum(sortStadard){
	var count=0;
	$.ajax({
		url:'./test.json',
		/*async: false,*/  //ajax同步
		data:{
			sortStadard:sortStadard
		},
		success:function(res){
			count=res.length;
			$("#pp").pagination({
				total:count
			})
		}
	});
}
getListNum(sortStadard);
// 加载列表数据
function loadList(sortStadard,pageNumber,pageSize){
	$.ajax({
		url:'./test.json',
		data:{
			sortStadard:sortStadard,
			pageNumber:pageNumber,
			pageSize:pageSize   // 可选10,20,30,50
		},
		success:function(res){
			var str='';
			var len=res.length;
			for(var i=0;i<len;i++){
				str+='<li>'+
						'<span class="sort_checkbox">'+
							'<input type="checkbox" class="single_selection" />'+
						'</span>'+
						'<span class="sort_name">'+'台湾'+i+'</span>'+
						'<span class="sort_word">'+'台北、新北、桃园、台中、台南、高雄、基隆、新竹、嘉义'+'</span>'+
						'<span class="sort_discribe">'+'台湾'+'</span>'+
						'<span class="sort_edit">'+
							'<i class="edit_btn"></i>'+
						'</span>'+
					'</li>';
			}
			$(".list_cont").html(str);
		},
		error:function(data){
			console.log(data);
		}
	})
}

loadList(sortStadard,1,10);

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
		loadList(sortStadard,pageNumber,pageSize);
		
		$(this).pagination('loaded');
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

/*窗口*/
$('#win').window({
    width:600,
    height:400,
    modal:true,
    collapsible:false,
	minimizable:false,
	maximizable:false,
	closable:false,
	closed:true
});

var type='add';
var editItemName='';
// 添加类别
$("#add_btn").on("click",function(){
	type='add';
	editItemName='';
	
	$("#newName").val("");
	$("#newDiscribe").val("");
	$("#newWord").html("");
	
	$('#win').window({
		title:'添加信息类别',
		closed:false
	})
})
// 编辑类别
$(".list_cont").delegate(".edit_btn","click",function(){
	type='edit';
	editItemName=$(this).parents("li").find(".sort_name").html();
	var word0=$(this).parents("li").find(".sort_word").html(),
		discribe0=$(this).parents("li").find(".sort_discribe").html();
	
	$("#newName").val(editItemName);
	$("#newDiscribe").val(discribe0);
	$("#newWord").html(discribe0);
	
	$('#win').window({
		title:'修改信息类别',
		closed:false
	})
})

// 取消添加或修改关闭窗口
$("#cancel").on("click",function(){
	$('#win').window({
		closed:true
	})
})

// 确定添加或修改信息
$("#ensure").on("click",function(){
	
	var newName=$("#newName").val(),
		newDiscribe=$("#newDiscribe").val(),
		newWord=$("#newWord").html();
	
	$.ajax({
		url:'',
		data:{
			type:type,   //'add'为添加，'edit'为编辑
			name:editItemName,  //  添加时为''，编辑时为编辑条目名称
			cont:{
				name:newName,
				discribe:newDiscribe,
				word:newWord
			}
		},
		success:function(res){
			
			/*根据返回值判断添加或修改的类别名是否存在，不存在写入数据库，存在通知用户*/
			if(true){  // 若类别名不存在
				$('#win').window({
					closed:true
				})
				// 重新载入列表
				loadList(sortStadard,1,10);
			}else{
				alert("类别名已存在，请重新输入");
			}
		},
		error:function(data){
			console.log(data);
		}
	})			
})

// 批量删除
$("#remove_btn").on("click",function(){
	var removeItemNames=[];
	$(".single_selection:checked").each(function(){
		removeItemNames.push($(this).parents("li").find(".sort_name").html());
	})
	$.ajax({
		url:'',
		data:{
			type:"remove",
			name:removeItemNames
		},
		success:function(res){
			$('#win').window({
				closed:true
			})
			// 重新载入列表
			loadList(sortStadard,1,10);
			$(".all_selection").prop("checked",false);
		}
	})
})

// 返回
$("#back_btn").on("click",function(){
	javascript :history.back(-1);
})
