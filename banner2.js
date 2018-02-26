//第二个轮播
$(()=>{
	//找到所有的img的总长度
	var length=$(".carousel2 ul li").length;
	var index=$(".carousel2 ul li").index();
	var timer=null;
	//鼠标移入时清空定时器
	$(".carousel2").hover(
		()=>{clearInterval(timer);},
		()=>{timer=setInterval(moveleft,1000);}
	);
	//为对应的原点绑定操作事件
	$(".box2").on("click","li",function(){
		var index=$(this).index();
		$(".carousel2 ul li").eq(index).show();
	});
	//左移的函数
	function moveleft(){
		index++;
		if(index==length){
			index=0;
		}
		$(".carousel2 ul li").eq(index).show().siblings().hide();
	}
	function moveright(){
		index--;
		if(index==0){
			index=length;
		}
		$(".carousel2 ul li").eq(index).show().siblings().hide();
	}
	timer=setInterval(moveright,1000);
});