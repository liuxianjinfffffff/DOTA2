var pop = document.getElementById("pop");
		window.onload =function(){
			pop.style.bottom='0px';
		}
		document.getElementById("pop_a1").onclick =function(e){
			e.preventDefault();
			e.target.parentNode.style.bottom="-320px";
			setTimeout(()=>pop.style.bottom = "0px",60000);
		}