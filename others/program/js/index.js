
// 点击对话框，跳转对话页面
$("#main .main").on("click","li",function(){
	//console.log($(this).attr("item"));
	window.location.href = "html/dialog.html?item="+$(this).attr("item");
})


// 点击头像出现侧导航
$("#head").on("click",function(){
	
	$("#mask").show();
	$("#main").addClass("moveRight").removeClass("moveLeft");
	
})

// 点击遮罩main区域 左移到原位置
$("#mask").on("click",function(){
	$("#mask").hide();
	$("#main").addClass("moveLeft").removeClass("moveRight");
	
})
