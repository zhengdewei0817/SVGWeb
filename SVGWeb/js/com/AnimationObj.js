/**
 *创建动态元素对象
 */

(function(win){
	
	var zdw_AnimObj = function(img,W){
		var  myHead = document.createElement("div");
		myHead.appendChild(img);
			$(myHead).css({
				 "position": "absolute",
				 "transform":"matrix(1,0,0,1,0,0)", 
			})
			$(myHead).find("img").css({
				 "width": W+"px",
			})
		
		/**
		 * *第一个参数为移动时间，第二个参数为移动坐标，第三个参数为透明度时间，第四个参数为透明度值
		 */
		myHead.setCss = function(posT,pos,opacT,opac){
			$(myHead).css({
				 "transition": "transform "+posT+"s linear ,opacity "+opacT+"s linear",
				 "-moz-transition": "-moz-transform "+posT+"s linear ,opacity "+opacT+"s linear",
				 "-webkit-transition": "-webkit-transform "+posT+"s linear ,opacity "+opacT+"s linear",
				 "-o-transition": "transform "+posT+"s linear ,opacity "+opacT+"s linear",
				 "transform": "translate("+pos[0]+"px,"+pos[1]+"px)",
				 "-ms-transform": "translate("+pos[0]+"px,"+pos[1]+"px)",
				 "-webkit-transform": "translate("+pos[0]+"px,"+pos[1]+"px)",
				 "-o-transform": "translate("+pos[0]+"px,"+pos[1]+"px)",
				 "-moz-transform": "translate("+pos[0]+"px,"+pos[1]+"px)",
				"opacity":opac,
			})
		}
		
		
		myHead.setScale = function(posT,pos,opacT,opac,yc){
			if(yc==""&&yc==undefined){
				yc=0
			}
			$(myHead).css({
				 "transition": "transform "+posT+"s linear "+yc+"s,opacity "+opacT+"s linear "+yc+"s",
				 "-moz-transition": "-moz-transform "+posT+"s linear "+yc+"s,opacity "+opacT+"s linear "+yc+"s",
				 "-webkit-transition": "-webkit-transform "+posT+"s linear "+yc+"s,opacity "+opacT+"s linear "+yc+"s",
				 "-o-transition": "transform "+posT+"s linear "+yc+"s,opacity "+opacT+"s linear "+yc+"s",
				 "transform": "scale("+pos[0]+","+pos[1]+")",
				 "-ms-transform": "scale("+pos[0]+","+pos[1]+")",
				 "-webkit-transform": "scale("+pos[0]+","+pos[1]+")",
				 "-o-transform": "scale("+pos[0]+","+pos[1]+")",
				 "-moz-transform": "scale("+pos[0]+","+pos[1]+"",
			})
		}
		
		
		myHead.setPos = function(_x,_y){
			$(myHead).css({
				"left":_x+"px",
				"top":_y+"px"
			})
		}
		
		
		
			
		return myHead;
	}
	
	
	win.zdw_AnimObj = zdw_AnimObj;
})(window)

