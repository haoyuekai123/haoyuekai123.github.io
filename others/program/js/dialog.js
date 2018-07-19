
var item = $.query.get("item");
$("#dialog .head h2").html(item);

// 输入框
$("#infomation").on("input",inputChange);

// 发送消息
$("#send").on("click",talk);
$("#infomation").on("keydown",function(e){
	if(e.keyCode == 13){
		talk();
	}
})


// 检测输入框
function inputChange(ele){
	if($("#infomation").val()){
		$("#send").css({
			backgroundColor:"#1296DB"
		})
	}else{
		$("#send").css({
			backgroundColor:"#ddd"
		})
	}
}

// 发送消息
function talk(){
	var info = $("#infomation").val();
	$("#dialog .content").append("<li>"+info+"</li>");
	$("#dialog .content").scrollTop($("#dialog .content")[0].scrollHeight);
	$("#infomation").val("");
	$.ajax({
		type:"get",
		url:"http://www.tuling123.com/openapi/api",
		data:{
			key:"9233d707aab74552b83e0796de9027c3",
			userid:"174676",
			info:info
		},
		success:function(res){
			if(res.code==100000){
				$("#dialog .content").append("<li>"+res.text+"</li>");
				$("#dialog .content").scrollTop($("#dialog .content")[0].scrollHeight);
				$("#infomation").onfocus;
				inputChange();
			}
		}
	});
}
