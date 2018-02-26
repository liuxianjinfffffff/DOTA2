	window.onload=function(){
		var numberone = document.getElementById("numberone");
		var games = document.getElementById("games");
		var details= document.getElementById("details");
		var banner= document.getElementById("banner");
		var Bg1= document.getElementById("bg1");
		var Bg2= document.getElementById("bg2");
		var Bg3= document.getElementById("bg3");
		var productimgs = document.getElementById("product-imgs");
		var imgs = document.getElementById("imgs-p");
		var imgss = document.getElementById("imgs-pp");
		var imghot = document.getElementById("imgs-hot");
		var footer = document.getElementById("footer");
			numberone.onclick =(e)=>{
						e.preventDefault();
						details.style.opacity = 0;
						banner.style.opacity = 1;
						Bg1.style.display = "block";
						Bg2.style.display = "block";
						Bg3.style.display = "block";
						productimgs.style.display = "block";
						imghot.style.visibility = "visible";
						footer.style.marginTop = "60px";
			}
			games.onclick =(e)=>{
						e.preventDefault();
						details.style.opacity = 1;
						banner.style.opacity = 0;
						Bg1.style.display = "none";
						Bg2.style.display = "none";
						Bg3.style.display = "none";
						productimgs.style.display = "none";
						imgss.style.display="none";
						imghot.style.visibility  = "hidden";
						footer.style.marginTop = "-270px"; 
			}
	}
	window.onload=function(){
		var hint = document.getElementById("hint");
		var Delete = document.getElementById("delete");
		Delete.onclick=(e)=>{
			e.preventDefault();
			hint.style.opacity = 0;
		}
	}
	