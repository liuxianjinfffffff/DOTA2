//引入header部分

//引入footer部分
//玩家选项
var selecta1 = document.getElementById("selecta1");
var selecta2 = document.getElementById("selecta2");
var selecth1 = document.getElementById("selecth1");
var selecth2 = document.getElementById("selecth2");
selecta1.onmouseover=function(e){
		e.preventDefault();
		selecth1.style.marginLeft="300px";
		selecth2.style.marginLeft="380px";
		selecth1.style.opacity = 1;
		selecth2.style.opacity = 0;
	}
selecta2.onmouseover=function(e){
		e.preventDefault();
		selecth2.style.marginLeft="300px";
		selecth1.style.marginLeft="200px";
		selecth2.style.opacity = 1;
		selecth1.style.opacity = 0;
	}
