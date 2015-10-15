/**
 *创建时间轴 
 */

(function(win){
	
	var infoconfig = {
		svgname:"http://www.w3.org/2000/svg",
		x_link_ns:"http://www.w3.org/1999/xlink",
	};
	
	var  zdw_timeLine = function(){
		var svg = document.createElementNS(infoconfig.svgname,"svg");
		var _w = $(win).width()*4;
		svg.setAttribute("width",_w/4);
		svg.setAttribute("height","50");
//		svg.setAttribute("x",-_w*3/4);
		
		var g = createTarget("g");
		var curinitX = -_w*3/4
	
		svg.appendChild(g)
		
		var MainLine = createTarget("line");
		g.appendChild(MainLine);
		MainLine.setAttribute("x1",0);
		MainLine.setAttribute("y1",25);
		MainLine.setAttribute("x2",_w);
		MainLine.setAttribute("y2",25);
		MainLine.setAttribute("style","stroke:rgb(29, 105, 202);stroke-width:5");
		
		var jiange = _w/83;
		
		for(var i = 0;i<84;i++){
			var lineT = createTarget("line");
			if(i%12==0){
				lineT.setAttribute("y1","15");
				lineT.setAttribute("y2","35");
				var  txt = createTarget("text");
				txt.textContent = 2017-(i/12)+"年";
				txt.setAttribute("x",i*jiange-20);
				txt.setAttribute("y","50");
				txt.setAttribute("fill","rgb(29, 105, 202)");
				txt.setAttribute("font-size",18);
				txt.setAttribute("font-family","arial");
				g.appendChild(txt)
			}else{
				lineT.setAttribute("y1","20");
				lineT.setAttribute("y2","30");
			}
			lineT.setAttribute("x1",(i*jiange));
			lineT.setAttribute("x2",(i*jiange));
			lineT.setAttribute("style","stroke:rgb(29, 105, 202);stroke-width:3");
			g.appendChild(lineT)
		}
			g.setAttribute("transform","matrix(1,0,0,1,"+curinitX+",0)")
		
		
		svg.setLinePos = function(pos){
			curinitX = pos;
			g.setAttribute("transform","matrix(1,0,0,1,"+curinitX+",0)")
		}
		svg.getLinePos = function(){
			return curinitX;
		}
		svg.getjiange = function(){
			return jiange;
		}
		
		
		
		return svg;
	}
	
	function createTarget(_tag){
		var _tag = document.createElementNS(infoconfig.svgname,_tag);
		return _tag;
	}
	
	
	
	
	
	
	
	win.zdw_timeLine = zdw_timeLine;
	
})(window)

