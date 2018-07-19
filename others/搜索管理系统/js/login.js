$("#sub").on("click",function(){
	$.ajax({
		url:'./login.php',
		type:'POST',
		data:{
			username:$('#userName').val(),
			password:$('#password').val()
		},
		dataType:'json',
		success:function(res){
			console.log(res);
			if(res.type==0){
				alert("用户名不存在");
			}else if(res.type==1){
				$.cookie('userName', res.name,{path: '/' });
				window.location="./index.html";
			}else if(res.type==2){
				alert("密码输入错误，请重新输入");
			}
			
		},
		error:function(res){
			console.log(res);
		}
	})
})
