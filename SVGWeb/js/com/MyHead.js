/**
 *这里是生成我的头像并控制的类 
 */

(function(win){
	var zdw_createhead = function(img,stageWC,stageHC){
		var  myHead = document.createElement("div");
			myHead.appendChild(img);
			$(myHead).find("img").css({
				 "-moz-transform": "scaleY(0)",
	  			 "-webkit-transform": "scaleY(0)",
	  			 "-o-transform": "scaleY(0)",
	  			 "-ms-transform": "scaleY(0)",
	  			 "transform": "scaleY(0)",
			})
	
			$(myHead).find("img").attr("class","Secle")
		
			$(myHead).attr("class","myHead");
	
			
			
			$(myHead).css({
				"position":"absolute",
				"z-index":"100",
				"top":(stageHC)+"px",
				"left":(stageWC-50)+"px"
			})
			
			setTimeout(function(){
				$(myHead).find("img").css({
//					"display":"block",
					"top":"-30px",
					"position": "relative",
					 "-moz-transform": "scaleY(1)",
		  			 "-webkit-transform": "scaleY(1)",
		  			 "-o-transform": "scaleY(1)",
		  			 "-ms-transform": "scaleY(1)",
		  			 "transform": "scaleY(1)",
		  			 "width":"100px"
				})
			},100)
			
			
			myHead.clear = function(){
				$(myHead).attr("class","");
					$(myHead).css({
				"position":"absolute",
				"z-index":"100",
				"top":(stageHC)+"px",
				"left":(stageWC-50)+"px"
			})
			}
			
			return myHead;
			
	}
	
	
	win.zdw_createhead = zdw_createhead;
	
})(window)
