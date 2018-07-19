
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
var num=getHref().No;
$(".note_num").html(num);
console.log($(".note_num").length);
// 加载列表数据
function loadList(num){
	$.ajax({
		url:'',
		data:{
			No:num
		},
		success:function(res){
			
			
			/*加载页面信息*/
			
		},
		error:function(data){
			console.log(data);
		}
	})
}
loadList(num);

// 时间选择
$("#note_time").jeDate({
    isinitVal:true,
    skinCell:"jedateblue",
    format: 'YYYY/MM/DD hh:mm:ss',
    choosefun:function(elem, val) {
    	
    }
});

$("#collect_time").jeDate({
    isinitVal:true,
    skinCell:"jedateblue",
    format: 'YYYY/MM/DD hh:mm:ss',
    choosefun:function(elem, val) {
    	
    }
});

