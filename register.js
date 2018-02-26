//手机注册
	$("#btnone").click(function(){
		$(this).css("background","red");
		$("#btnone>i").show();
		$("#btntwo>i").hide();
		$("#btntwo").css("background","rgba(15,77,61,0.6)");
		$(".form_1").show();
		$(".form_2").hide();
	});
//邮箱注册
	$("#btntwo").click(function(){
		$(this).css("background","red");
		$("#btntwo>i").show();
		$(".form_1").hide();
		$(".form_2").show();
		$("#btnone>i").hide();
		$("#btnone").css("background","rgba(15,77,61,0.6)");
	});
	//input占位符
	var phone = document.getElementById("phone");
		phone.addEventListener('focus',function(){//增加获取焦点时监听事件
             phone.removeAttribute('placeholder')//input获取焦点时，移除placeholder属性
        });
         phone.addEventListener('blur',function(){//增加失去焦点时的监听事件
             phone.setAttribute('placeholder','手机号')//从新返回监听事件
        });
	var Nspan =document.getElementById("name-span"); 
		function yan(str){
			if(str==null&&str==''){
				console.log('0.123');
			}
		}
	var pwd = document.getElementById("pwd");
		pwd.addEventListener('focus',function(){
			pwd.removeAttribute('placeholder')
		});
		pwd.addEventListener('blur',function(){
		pwd.setAttribute('placeholder','密码（由6-16位字母、数字及字符组成')
		});
