var menu=[
	[
		'<li style="height: 178px;background: none;cursor:default;"></li>',
		'<li class="animated zoomInDown"><a href="/others/我的简历/index.html">我的简历</a></li>'
	],
	[
		'<li style="height: 178px;background: none;cursor:default;"></li>',
		'<li class="animated zoomInDown"><a href="/others/海底世界/aquarium/aquarium.html">大鱼缸</a></li>',
		'<li class="animated zoomInDown"><a href="/others/水池/index.html">水池</a></li>',
		'<li class="animated zoomInDown"><a href="/others/360°全景/index.html">360°全景</a></li>',
		'<li class="animated zoomInDown"><a href="/others/魔方/index.html">魔方</a></li>',
		'<li class="animated zoomInDown"><a href="/others/photo/photo.html">旋转木马</a></li>',
		'<li class="animated zoomInDown"><a href="/others/鲨鱼/index.html">鲨鱼</a></li>',
		'<li class="animated zoomInDown"><a href="/others/love/index.html">love</a></li>'
	],
	[
		'<li style="height: 178px;background: none;cursor:default;"></li>',
		'<li class="animated zoomInDown"><a href="/others/成长树/index.html">成长树</a></li>',
		'<li class="animated zoomInDown"><a href="/others/齿轮/index.html">齿轮运转</a></li>',
		'<li class="animated zoomInDown"><a href="/others/打火机/index.html">打火机</a></li>',
		'<li class="animated zoomInDown"><a href="/others/卡通钟表/index.html">卡通钟表</a></li>',
		'<li class="animated zoomInDown"><a href="/others/CSS/yellowBoy.html">小黄人</a></li>',
		'<li class="animated zoomInDown"><a href="/others/CSS/QQ.html">QQ企鹅</a></li>',
		'<li class="animated zoomInDown"><a href="/others/CSS/灰太狼.html">灰太狼</a></li>'
	],
	[
		'<li style="height: 178px;background: none;cursor:default;"></li>',
		'<li class="animated zoomInDown"><a href="/others/贪吃蛇/index.html">贪吃蛇</a></li>',
		'<li class="animated zoomInDown"><a href="/others/dist/index.html">俄罗斯方块</a></li>',
		'<li class="animated zoomInDown"><a href="/others/开心消消乐/index.html">开心消消乐</a></li>',
		'<li class="animated zoomInDown"><a href="/others/Plants_VS_Zombies/index.html">植物大战僵尸</a></li>'
	],
	[
		'<li style="height: 178px;background: none;cursor:default;"></li>'
		/*'<li class="animated zoomInDown"><a href="/others/搜索管理系统/login.html">搜索管理系统</a></li>'*/
	]
]



$(".navItem").on("click",function(){
	var index=$(this).index();
	var len=menu[index].length;
	var str='';
	if($(".navItem.on").length>0){
		if($(this).hasClass("on")){
			$(this).removeClass("on");
			$("div.menu").removeClass("open").addClass("close");
			$("div.menuBottom .img").removeClass("open").addClass("close");
			setTimeout(function(){
				$("#menu").html("");
			},2000);
		}else{
			$(this).addClass("on").siblings().removeClass("on");
			for(var i=0;i<len;i++){
				str+=menu[index][i];
			}
			$("#menu").html(str);
		}
	}else{
		$(this).addClass("on");
		$("div.menu").addClass("open").removeClass("close");
		$("div.menuBottom .img").addClass("open").removeClass("close");
		setTimeout(function(){
			for(var i=0;i<len;i++){
				str+=menu[index][i];
			}
			$("#menu").html(str);
			
		},2000);
	}
})