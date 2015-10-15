
(function(win){
		/**
	 * 此工具中用到的变量值集合
	 */
	var infoconfig = {
		svgname:"http://www.w3.org/2000/svg",
		x_link_ns:"http://www.w3.org/1999/xlink",
	};
	var createCricle = function(_r,_fill,_stroke,_SW,str,txtC){
		var cr = createCircle(_r,_fill,_stroke,_SW,str,txtC);
		
		return cr;
	}
	
	/**
	 * 第一个是id  第2个是半径 第3个是填充颜色  第4个是描边颜色   第5个是描边宽   
	 * @param {Object} _r
	 * @param {Object} _stroke
	 * @param {Object} _SW
	 * @param {Object} _fill
	 */
	function createCircle(_r,_fill,_stroke,_SW,str,txtC){
		
		var g = createTag("g")
		
		
		
		var _circle = document.createElementNS(infoconfig.svgname,"circle");
		g.appendChild(_circle)
		if(_r==null||_r==undefined||_r==""){
			_r = "10"
		}
		if(_fill==null||_fill==undefined||_fill==""){
			_fill = "#000000"
		}
		if(_stroke==null||_stroke==undefined||_stroke==""){
			_stroke = "#000000"
		}
		if(_SW==null||_SW==undefined||_SW==""){
			_SW = "0"
		}
		if(txtC==null||txtC==undefined||txtC==""){
			txtC = "#000000"
		}
		
		_circle.setAttribute("r",_r);
//		_circle.setAttribute("id",_id);
		_circle.setAttribute("fill",_fill);
		_circle.setAttribute("stroke",_stroke);
		_circle.setAttribute("stroke-width",_SW);


		var txt = createTextSp()
		txt.createSp(str)
		g.appendChild(txt);
		txt.setAttribute("fill",txtC);
		
		





		g.setPos = function(_x,_y){
			g.setAttribute("transform","matrix( 1, 0, 0, 1,"+_x+","+_y+")");
			txt.setAttribute("x",5);
		}

		return g;
	}
	
	
	
		
	/**
	 * 创建文字说明
	 */
	function createTextSp(name){
		var txt = createTag("text");
		
		txt.createSp = function(str){
			var aaa = txt.getElementsByTagName("tspan");
			var num = aaa.length;
			for(var aa =0;aa<num;aa++){
				txt.removeChild(aaa[0])
			}
			var strarr = []
			strnum = str.length;
			for(var s = 0;s<strnum;s++){
				if(str[s]=="{"||str[s]=="}"){
					strarr[strarr.length] = s
				}
			}
			var frist = false
			//console.log(strarr)
			if(strarr[0]!=0){
				strarr.splice(0,0,0)
			}else{
				frist = true
			}
			//console.log(strarr)
			if(strarr[strarr.length-1]!=(str.length)){
				strarr.push((str.length))
			}
			//console.log(strarr)
			//console.log(str)
			var txtarr = [];//创建存放公式的文字数组，单数为正常，双数为斜体
			
			for(var t = 0;t<strarr.length-1;t++){
				if(t==0&&!frist){
					txtarr.push(str.substring(strarr[t],strarr[t+1]))
				}else{
					txtarr.push(str.substring(strarr[t]+1,strarr[t+1]))
				}
				
			}
			
			for(var i = 0;i<txtarr.length;i++){
					var _tag = document.createElementNS("http://www.w3.org/2000/svg","tspan");
					txt.appendChild(_tag);
					if(frist){
						if(i%2==0){
						_tag.setAttribute("style","font-style: italic;font-family: arial;");
						}else{
							_tag.setAttribute("style","font-family: arial;");
						}
					}else{
						if(i%2!=0){
						_tag.setAttribute("style","font-style: italic;font-family: arial;");
						}else{
							_tag.setAttribute("style","font-family: arial;");
						}
					}
					
					
					_tag.textContent = txtarr[i]
			}
			
			
			
		}
		
		return txt;
	}
	
	
	
	
	
	
	/**
	 * 创建svg标签
	 * @param {Object} _tag
	 */
	function createTag(_tag,_left,_top){
		var _tag = document.createElementNS(infoconfig.svgname,_tag);
		var issetTr = true;
		if(_left==null||_left==undefined||_left==""){
			_left = 0;
			issetTr = false;
		}
		if(_top==null||_top==undefined||_top==""){
			_top = 0
		}
		
		
		if(issetTr){
			_tag.setAttribute("transform","matrix( 1, 0, 0, 1,"+_left+","+_top+")");
		}
		
		return _tag;
	}
	
	
	
	win.createPoint = createCricle;
	
})(window)

