/**
 * Created by Administrator on 2016/7/19 0019.
 */
function game(boxSize,num,jilv){
    this.boxSize=boxSize||600;
    this.box;
    this.num=num||5;
    this.sboxArr=[];
    this.leiArr=[];
    this.jilv=jilv||0.2;
}
game.prototype={
    play:function(){
        this.makeBox();
        this.makeSbox();
        this.downboom();
        this.clickStuff();
    },
    makeBox:function(){
        this.box=$("<div>");
        this.box.css({
            width:this.boxSize,
            height:this.boxSize,
            border:"1px solid blue"
        }).appendTo($("body"));
    },
    makeSbox:function(){
        for(var i=0;i<(this.num*this.num);i++){
            var random1=parseInt(Math.random()*255);
            var random2=parseInt(Math.random()*255);
            var random3=parseInt(Math.random()*255);
            var color="rgb("+random1+","+random2+","+random3+")"
            var divs=$("<div>").css({
                width:(this.boxSize/this.num),
                height:(this.boxSize/this.num),
                background:color,
                float:"left"
            }).appendTo(this.box);
            this.sboxArr.push(divs);
        }
    },
    downboom:function(){
        var arr1=[];
        for(var i=0;i<(this.num*this.num);i++){
            var random=Math.random();
            if(random>this.jilv){
                arr1.push(0)
            }else{
                arr1.push(-1)
            }
        }
        var arr2=[];
        for(var i=0;i<this.num;i++){
            arr2[i]=[];
            for(var j=0;j<this.num;j++){
                var m=(i*this.num)+j;
                arr2[i][j]=arr1[m]
            }
        }

        var lei=[];
        for(var i=0;i<this.num;i++){
            lei[i]=[];
            for(var j=0;j<this.num;j++){
                if(arr2[i][j]==-1){
                    lei[i][j]="lei";
                }else{
                    var onum=this.num-1;
                    var d1=j<onum?arr2[i][j+1]:0;
                    var d2=j>0?arr2[i][j-1]:0;
                    var d3=i>0?arr2[i-1][j]:0;
                    var d4=i<onum?arr2[i+1][j]:0;
                    var d5=(i>0&&j<onum)?arr2[i-1][j+1]:0;
                    var d6=(i<onum&&j<onum)?arr2[i+1][j+1]:0;
                    var d7=(i>0&&j>0)?arr2[i-1][j-1]:0;
                    var d8=(i<onum&&j>0)?arr2[i+1][j-1]:0;
                    lei[i][j]=Math.abs(d1+d2+d3+d4+d5+d6+d7+d8);
                }
            }
        }

        var olei=[];
        for(var i=0;i<this.num;i++){
            for(var j=0;j<this.num;j++){
                olei.push(lei[i][j]);
            }
        }
        for(var i=0;i<olei.length;i++){
            this.leiArr[i]=olei[i];
        }


    },
    clickStuff:function(){
        var that=this;
        $(this.sboxArr).each(function(i){
            var index=i;
            this.click(function(){
                var lei=that.leiArr[index];
                if(lei=="lei"){
                    alert("别吃饭了！")
                }else{
                    $(this).html(lei)
                }
            })
        })
    }

}


var game=new game();
game.num=10;
game.boxSize=1000;
game.play();
