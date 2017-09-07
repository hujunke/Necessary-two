var lis = document.getElementsByClassName("onepage-pagination")[0].children;
	var box = document.getElementsByClassName("section")[0];
	var hide=document.getElementsByClassName("onepage-pagination")[0];
	var iNow = 0, w = 640;
	var isTrue = true;
	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onclick = function(){
			if(isTrue){
				isTrue = false
				lis[iNow].className = ''
				iNow = this.index;
				lis[iNow].className = "select"
				alert(iNow)
				move(box,{"top":-iNow*w},{fn:function(){
					isTrue = true
				}})
			}
		}
	};
	scroll(box,function(obj,event){
		if(isTrue){
			isTrue = false;
			//console.log("shang")
			lis[iNow].className = ''
			iNow--;
			if(iNow<0){
				iNow = 0
			}
			if(iNow<obj.children[0].children.length-1){
				hide.style.display="block"
			}
			
			lis[iNow].className = "select"
			move(obj,{"top":-iNow*w},{fn:function(){
				isTrue = true
			}})
		}
	},function(obj,event){
		if(isTrue){
			isTrue = false;
			//console.log("xia")
			lis[iNow].className = ''
			iNow++;
			console.log(obj.children[0].children.length)
			if(iNow>=obj.children[0].children.length-1){
				iNow = obj.children[0].children.length-1;	
				hide.style.display="none"
			}
			/*if(iNow==obj.children[0].children.length-1){
				
			}*/
			lis[iNow].className = "select";
			
			move(obj,{"top":-iNow*w},{fn:function(){
				isTrue = true;
			}})
			
		}
	})