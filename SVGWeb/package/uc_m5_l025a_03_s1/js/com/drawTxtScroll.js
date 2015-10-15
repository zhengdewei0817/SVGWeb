(function(win){
	//此文档中创建标签以及滚动条模块
	
	/**
	 * 此工具中用到的变量值集合
	 */
	var infoconfig = {
		svgname:"http://www.w3.org/2000/svg",
		x_link_ns:"http://www.w3.org/1999/xlink",
	};
	
	
	
	var zdwTxtAndScroller = function(_w,_h,_x,_y,_bgc,_fs,_txtinfo,_fontcolor,_isshowVariable,_tagetexpression){
		
		var g = createTextFile(_w,_h,_x,_y,_bgc,_fs,_txtinfo,_fontcolor,_isshowVariable,_tagetexpression)
		//console.log(_w,_h,_x,_y,_bgc,_fs,_txtinfo,_fontcolor)


		return g;
		
		
	}
	
	var p = zdwTxtAndScroller.prototype;
	
	
	/**
	 * 创建背景
	 */
	function createTextFile(_w,_h,_x,_y,_bgc,_fs,_txtinfo,_fontcolor,_isshowVariable,_tagetexpression){
		var g = createTag("g");
		var rectcom = createTag("rect");
		g.appendChild(rectcom);
		
		
		
		
		
		_w = initvar(_w,"200");
		_h = initvar(_h,"20");
		_x = initvar(_x,"0");
		_y = initvar(_y,"0");
		_bgc = initvar(_bgc,"#666666");
		_fs = initvar(_fs,"18");
		_txtinfo = initvar(_txtinfo,"");
		_fontcolor = initvar(_fontcolor,"#ffffff"); 
		
		rectcom.setAttribute("width",_w);
		rectcom.setAttribute("height",_h);
		rectcom.setAttribute("x",_x);
		rectcom.setAttribute("y",_y);
		rectcom.setAttribute("fill",_bgc);		
		
//		var foreignObject = createTag("foreignObject");
//		foreignObject.setAttribute("width",_w);
//		foreignObject.setAttribute("height",_h);
//		rectcom.setAttribute("x",_x);
//		rectcom.setAttribute("y",_y);
//		foreignObject.setAttribute("x",_x);
//		foreignObject.setAttribute("y",_y);
//		g.appendChild(foreignObject);
//		
//		var div = document.createElement("div")
//		foreignObject.appendChild(div);
//		div.setAttribute("style","width:100%;height:100%;text-align:center;font-family: arial;line-height:"+_h+"px;font-size:"+_fs+"px;");
//		div.innerHTML = _txtinfo;
		
		var txt = createTextSp("text");
		g.appendChild(txt);
		txt.setAttribute("x",_x);
		txt.setAttribute("y",_y);
		txt.setAttribute("fill",_fontcolor);
		txt.setAttribute("font-size",_fs);
		txt.setAttribute("font-family","arial");
		txt.createSp(_txtinfo);
//		txt.setAttribute("y",(_y+txt.getBBox().height));
		
		//console.log(txt.getBBox())
		
		
//		g.setTxt = function(txt){
//			div.innerHTML = txt;
//		}
//		
		
		
	
		
		
		function getWid(){
			
				if(_txtinfo!=""&&txt.getBBox().width==0){
					setTimeout(function(){
						getWid();
					},100)
				}else if(_txtinfo!=""&&txt.getBBox().width!=0){
					center();
				}

			
		}
		
		function center(){
			txt.setAttribute("y",(parseInt(_y)+txt.getBBox().height));
			txt.setAttribute("x",(parseInt(_x)+(parseInt(_w) - txt.getBBox().width)/2));
		}
		
		
		g.setcenterTxt = function(){
			getWid();
		}
		
		g.settextContent2 = function(str){
			txt.createSp(str);
		}
		

		g.getTxt = function(){
			return txt.getBBox().width
		}
		
		g.textContent2 = function(){
			return _txtinfo;
		}
		
		g.getval = function(){
			if(_isshowVariable){
				return _tagetexpression;
			}else{
				return null;
			}
		}
		

		return g;
	}
	
	
	
	function initvar(mubiao,initnum){
		
		if(mubiao==null||mubiao==undefined||mubiao==""){
			mubiao=initnum;
			
		}
		return mubiao;
		
	}

	
	/**
	 * 创建Path对象
	 */
	function createPath(){
		var _path = document.createElementNS(infoconfig.svgname,"path");
		/**
		 * 设置线条样式
		 */
		_path.setAttrPath = function(){
			
		}
		return _path;
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
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	win.zdwTxtAndScroller = zdwTxtAndScroller;
	
})(window)
