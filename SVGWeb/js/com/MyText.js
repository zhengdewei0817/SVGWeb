/**
 *这里是我显示在页面的文字说明 
 */
(function(win){
	var instance;
	var zdw_createTxt = function(str){
		if(instance==null){
			instance = new createT(str);
			return instance;
		}else{
			instance.setinfo(str);
			return instance;
		}
	}
	
	
	var  createT = function(str){
		var txtDiv = document.createElement("div");
		$(txtDiv).attr("class","MyText");
		var len = str.length;
		var cur = -1;
		function AffT(str){
			setTimeout(function(){
				cur+=1;
				if(len!=cur){
					addT(str[cur]);
					AffT(str);
				}
			},20)
		}
		AffT(str);
		
		
		txtDiv.setPos = function(_x,_y){
			$(txtDiv).css({"left":_x+"px","top":_y+"px"})
		}
		
		txtDiv.addTxt = function(str2){
			addT(str2)
		}
		
		function addT(str2){
			if(str2=="|"){
				str2="<br/>"
			}
			if(str2=="*"||str2=="＊"){
				str2 = "&nbsp;"
			}
			txtDiv.innerHTML = txtDiv.innerHTML+str2
		}
		
		
		txtDiv.clear = function(){
			$(this).css("opacity",0);
			str = ""
			setTimeout(function(){
				txtDiv.innerHTML = ""
			},1000)
		}
		
		txtDiv.setinfo = function(str2){
		//	this.clear();
			txtDiv.innerHTML = ""
			 len = str2.length;
			 cur = -1;
			 AffT(str2);
			 $(this).css("opacity",1)
		}
		
		
		
		
		
		
		return txtDiv;
	}
	

	
	
	
	
	
	
	
	
	win.zdw_createTxt = zdw_createTxt;
	
})(window)
