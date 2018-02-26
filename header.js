//1楼活动中心的分页
$(document).ready(function(){
	$(".news_li1").click(function(){
		$(".news_row1").fadeIn().siblings().fadeOut();
	});
});
$(document).ready(function(){
	$(".news_li2").click(function(){
		$(".news_row2").fadeIn().siblings().fadeOut();
	});
});
$(document).ready(function(){
	$(".news_li3").click(function(){
		$(".news_row3").fadeIn().siblings().fadeOut();
	});
});
$(document).ready(function(){
	$(".news_li4").click(function(){
		$(".news_row4").fadeIn().siblings().fadeOut();
	});
});
$(document).ready(function(){
	$(".news_li5").click(function(){
		$(".news_row5").fadeIn().siblings().fadeOut();
	});
});
//3楼活动中心的分页
$(document).ready(function(){
	$(".v-li1").click(function(){
		$(".page01").fadeIn().siblings().fadeOut();
	});
});
$(document).ready(function(){
	$(".v-li2").click(function(){
		$(".page02").fadeIn().siblings().fadeOut();
	});
});
$(document).ready(function(){
	$(".v-li3").click(function(){
		$(".page03").fadeIn().siblings().fadeOut();
	});
});
$(document).ready(function(){
	$(".v-li4").click(function(){
		$(".page04").fadeIn().siblings().fadeOut();
	});
});

//顶部横幅下拉固定定位
	var banner = document.getElementById("banner");
	var backtop = document.getElementById("backtop");
	window.onscroll = function(){
		scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
		if(scrollTop>800){
			banner.className = "banner fixed";
			backtop.style.opacity=1;
		}else{
			banner.className = "banner";
			backtop.style.opacity=0;
		}
	}
//右侧导航各个点击跳转
	$(".go-kefu").click(function(){
		window.location.href="service.html";
	});
	$(".sina").click(function(){
		window.location.href="https://weibo.com/p/1006063083660057?is_hot=1";
	});