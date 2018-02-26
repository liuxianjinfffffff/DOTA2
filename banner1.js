//banner1
 /*定义两个变量，保存当前页码和上一页页码*/
  $(function(){
			var $index=0;
			var $exdex=0;
		   /*小点的鼠标移入事件，触发图片左移还是右移*/
		   $(".choose span").mouseover(function(){
			//获取当前移入的index值
				$index=$(this).index();  
			//首先让点的颜色变化，表示选中
				$(".choose span").eq($index).addClass("red").siblings().
			  removeClass("red");
			//判断如果index变小，证明图片要往左移动。变大则为右移
				if($index>$exdex){
				 next();
				}else if($index<$exdex){
				 prev();
				}
			//移动完毕将当前index值替换了前页index
				 return $exdex=$index;
			});
		   //下一页的点击事件。在右移基础上加了最大index判断
			$(".next").click(function(){
					$index++;
				if($index>2){$index=0;}
				$(".choose span").eq($index).addClass("red").siblings().removeClass("red");
				next();
				return $exdex=$index;
			   });
		   //上一页的点击事件
		   $(".pre").click(function(){
				$index--;
				if($index<0){$index=2;};
				$(".choose span").eq($index).addClass("red").siblings().removeClass("red");
				prev();
				return $exdex=$index;
			   });
		   //加个定时器，正常轮播
		   var atime=setInterval(function(){
				$(".next").click();   
			},5000);
			$('.banner1').mouseenter(function(){
				clearInterval(atime);
			});
		   $('.banner1'). mouseleave(function(){
				atime=setInterval(function(){
			$(".next").click();   
			},5000);
		   });
		   //这里为右移和左移的事件函数。
		   //右移基本原理就是先让exdex定位的left左移百分百，而选中的当前页从屏幕右边移入,left变为0
		   function next(){
			$(".banner1 a").eq($index).stop(true,true).
			  css("left","100%").animate({"left":"0"});
			$(".banner1 a").eq($exdex).stop(true,true).
			  css("left","0").animate({"left":"-100%"});
		   }
		   function prev(){
			$(".banner1 a").eq($index).stop(true,true).
			 css("left","-100%").animate({"left":"0"});
			$(".banner1 a").eq($exdex).stop(true,true).
			 css("left","0").animate({"left":"100%"});
		   }
   });
//第二个轮播
$( function(){
	//找到所有的img的总长度
	var length=$(".carousel2 ul li").length;
	var index=$(".carousel2 ul li").index();
	var timer=null;
	//鼠标移入时清空定时器
	$(".carousel2").hover(
		()=>{clearInterval(timer);},
		()=>{timer=setInterval(moveleft,2000);}
	);
	//为对应的原点绑定操作事件
	$(".box2").on("click","li",function(){
		var index=$(this).index();
		$(".carousel2 ul li").eq(index).fadeIn();
	});
	//左移的函数
	function moveleft(){
		index++;
		if(index==length){
			index=0;
		}
		$(".carousel2 ul li").eq(index).fadeIn().siblings().fadeOut();
	}
	function moveright(){
		index--;
		if(index==0){
			index=length;
		}
		$(".carousel2 ul li").eq(index).fadeIn().siblings().fadeOut();
	}
		timer=setInterval(moveright,2000);
	});
//第三个轮播
$(function(){
	//找到所有的img的总长度
	var length=$(".carousel3 ul li").length;
	var index=$(".carousel3 ul li").index();
	var timer=null;
	//鼠标移入时清空定时器
	$(".carousel3").hover(
		()=>{clearInterval(timer);},
		()=>{timer=setInterval(moveleft,1500);}
	);
	//为对应的原点绑定操作事件
	$(".box3").on("click","li",function(){
		var index=$(this).index();
		$(".carousel3 ul li").eq(index).fadeIn();
	});
	//左移的函数
	function moveleft(){
		index++;
		if(index==length){
			index=0;
		}
		$(".carousel3 ul li").eq(index).fadeIn().siblings().fadeOut();
	}
	function moveright(){
		index--;
		if(index==0){
			index=length;
		}
		$(".carousel3 ul li").eq(index).fadeIn().siblings().fadeOut();
	}
	timer=setInterval(moveright,1500);
});
//1F视频播放
  var container=document.querySelector(".container");
    var crtl=document.querySelector(".crtl");
    container.onmouseover=function(){
        crtl.style.display="block";
    }
    container.onmouseout=function(){
        crtl.style.display="none";
    }
    var v3=document.getElementById("v3");
    var img3=document.querySelector(".crtl img");
    crtl.onclick = function(e){
        e.preventDefault();
        if(v3.paused){
            v3.play();
            img3.src="img/index/pause.png";
        }else{
            v3.pause();
            img3.src="img/index/play.png";
        }
    }