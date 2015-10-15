/**
 *绘制饼状图 
 */
(function(win){
	var infoconfig = {
		svgname:"http://www.w3.org/2000/svg",
		x_link_ns:"http://www.w3.org/1999/xlink",
	};
	//写到添加扇形 
	var zdw_createBingPic = function(arr,time){
		var svg = document.createElementNS(infoconfig.svgname,"svg");
		var _w = $(win).width();
		var _h = $(win).height();
		var createW = 0;
		if(_w>1000){
			createW = 300
		}else{
			createW = 300
		}
		
		svg.setAttribute("width",createW+6);
		svg.setAttribute("height",createW+6);
		svg.setAttribute("style","position: absolute;top:"+(_h-createW-3+30)/2+";left:"+(_w-createW-3)/2+";")
		var  g = createTarget("g");
		g.setAttribute("transform","matrix( 1, 0, 0, 1, 3,3)")
		svg.appendChild(g)
		var shanxingArr = [];
		for(var i = 0;i<arr.length;i++){
			var shanOne = createShanxing(arr[i],createW);
			shanxingArr.push(shanOne);
			g.appendChild(shanOne);
		}
		var timeF;
		
		svg.play = function(){
			timeF = setInterval(function(){
				for(var i = 0;i<shanxingArr.length;i++){
					shanxingArr[i].play();
				}
				shanxingArr[0].callBack(svg.stop)
			},time)
		}
		
		svg.stop = function(){
			//console.log("+++++++++")
			//setTimeout(function(){
				clearInterval(timeF)
//			},500)
			
		}
		
		svg.play2 = function(){
			timeF = setInterval(function(){
				for(var i = 0;i<shanxingArr.length;i++){
					shanxingArr[i].play2();
//					console.log(i)
				}
				shanxingArr[0].callBack(svg.stop)
			},time)
		}
		
		
		return svg;
	}
	
	/**
	 *创建扇形 
	 * 传递扇形数据
	 * 数据包括 ，颜色，边框颜色，边框粗细，终点角度
	 */
	function createShanxing (arr,W){
		var shan = createTarget("path");
		shan.setAttribute("fill",arr[0]);
		shan.setAttribute("stroke",arr[1]);
		shan.setAttribute("stroke-width",arr[2]);
		var  curjiaodu = 270;
		var isshow = true;
		var isKG = true;
		var callBackF = null;
		
		shan.play = function(){
			curjiaodu-=4;
			if(curjiaodu<(270-arr[3])+1){
				curjiaodu = (270-arr[3])+1;
				if(callBackF!=undefined){
					callBackF();
				}
				
			}
			if(curjiaodu>=(270-arr[3])){
//			//	console.log(curjiaodu)
				var fx = 0;//绘制圆弧的方向
				var bj = W/2;//半径
				if(curjiaodu<=90){
					fx = 1;
				}
				var x = bj+Math.cos(curjiaodu*Math.PI/180)*bj;
				var y = bj+Math.sin(curjiaodu*Math.PI/180)*bj
				var stra = "A"+bj+","+bj+","+"0"+","+fx+",0,"+x+","+y;
//				
				shan.setAttribute("d","M"+bj+","+bj+" "+"L"+bj+","+0+" "+stra+" "+"L"+bj+","+bj)
			}
			
		}
		
		
		shan.callBack = function(Fn){
			callBackF = Fn
		}
		
		
		shan.play2 = function(){
		
			curjiaodu+=4;
			if(curjiaodu>270){
				curjiaodu = 270;
				if(isshow){
					isshow = false;
				}
				if(callBackF!=undefined){
					callBackF();
				}
			}
			
			if(!isshow&&isKG){
				isKG = false;
					shan.setAttribute("fill","none");
					shan.setAttribute("stroke","none");
					shan.setAttribute("stroke-width",0);
			}
			
			
			if(curjiaodu<=270){
				var fx = 0;//绘制圆弧的方向
				var bj = W/2;//半径
				if(curjiaodu<=90){
					fx = 1;
				}
				var x = bj+Math.cos(curjiaodu*Math.PI/180)*bj;
				var y = bj+Math.sin(curjiaodu*Math.PI/180)*bj
				var stra = "A"+bj+","+bj+","+"0"+","+fx+",0,"+x+","+y;
				
				shan.setAttribute("d","M"+bj+","+bj+" "+"L"+bj+","+0+" "+stra+" "+"L"+bj+","+bj)
			}
			
		}
		
		
		
		
		
		return shan;
	}
	
	
	
	
	function createTarget(_tag){
		var _tag = document.createElementNS(infoconfig.svgname,_tag);
		return _tag;
	}
	
	win.zdw_createBingPic = zdw_createBingPic;
	
	
})(window)

