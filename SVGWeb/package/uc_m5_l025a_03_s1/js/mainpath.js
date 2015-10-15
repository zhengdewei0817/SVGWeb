/**
		 * 这里是来加载画线的逻辑的
		 * 作为文档类
		 */


(function(win) {


		var mainpath = function(){
			init();
		}


		function init(){

			var stage = new stageSvg();
			var zdwconfig = win.zdwconfig;
			var stageinfo = zdwconfig.stageinfo;
			var ruleinfo = zdwconfig.ruleinfo;
			var ruleinfo2 = zdwconfig.ruleinfo2;
			var drawLine = zdwconfig.drawLine;
			var drawLine_line = drawLine.line;

			var textFile = zdwconfig.textFile.txt;

			var scrollbarD = zdwconfig.scrollbarD.scr;

			var point = new createPoint(3,"rgb(192,235,192)","#ff0000",0.5,"{A}","rgb(102,0,0)");//这里是我创建的左侧的交点
//*********************************************************************************************************************************

			var pointight = new createPoint(3,"rgb(253,184,63)","#ff0000",0.5,"{B}","rgb(25,82,195)");//这里是我创建的左侧的交点
//*********************************************************************************************************************************







			var con = document.getElementById(stageinfo.SVGName);





















			//-----------------------------------------------------接下来是绘制线条逻辑-----------------------------------------------------------------------------------


			var mylineG = new zdwdraw();
			var spriteg = mylineG.createTag("g", ruleinfo.left, ruleinfo.top)
			con.appendChild(spriteg)
			
			
			//创建遮罩
			var maskspriteGe = mylineG.createTag("mask", ruleinfo.left, ruleinfo.top);
			maskspriteGe.setAttribute("id", "linemask");
			con.appendChild(maskspriteGe);

			var maskg = mylineG.createTag("g");
			maskspriteGe.appendChild(maskg);

			var maskrect = mylineG.createRect(parseFloat(ruleinfo.horAxisLineLength), parseFloat(ruleinfo.lenAxisLineLength), "#FFFFFF")
			maskg.appendChild(maskrect)

			spriteg.setAttribute("mask", "url(#" + "linemask" + ")")



			//	//计算横向点间距
			var horPointdistancesold = parseInt(ruleinfo.horAxisLineLength) / (parseInt(ruleinfo.horAxislength) - 1);
			//计算纵向点的间距
			var lenPointdistancesold = parseInt(ruleinfo.lenAxisLineLength) / (parseInt(ruleinfo.lenAxislength) - 1);

			//计算横向点间距
			var horPointdistances = parseFloat(ruleinfo.horAxisLineLength) / ((parseFloat(ruleinfo.horAxislength) - 1) * (parseFloat(ruleinfo.horAxisbetween) + 1));
			//计算纵向点的间距
			var lenPointdistances = parseFloat(ruleinfo.lenAxisLineLength) / ((parseFloat(ruleinfo.lenAxislength) - 1) * (parseFloat(ruleinfo.lenAxisbetween) + 1));

			//计算横向点间距
			var horPointdistances = horPointdistancesold;
			//计算纵向点的间距
			var lenPointdistances = lenPointdistancesold


			var lenAxisOffSet = parseFloat(ruleinfo.lenAxisOffSet) * horPointdistancesold;
			var horAxisOffSet = parseFloat(ruleinfo.horAxisOffSet) * lenPointdistancesold;


			//--------------2015年9月13号 --------添加逻辑
			var drawXFrist = 0;
			var drawXLast = 0;
			//这里的两个变量是用来处理For循环的  第一个可能为负数  如果是负数  则=-lenAxisOffSet
			//  drawXLast 则== lenAxisLineLength+drawXFrist
			drawXFrist = lenAxisOffSet * -1;
			drawXLast = parseFloat(ruleinfo.lenAxisLineLength) + drawXFrist;
			var curselected = -1; //当前选择的ID






//----------------------------------------------------------------------------------右侧的图像变量

	var spritegright = mylineG.createTag("g", ruleinfo2.left, ruleinfo2.top)
	con.appendChild(spritegright)
	
	//创建遮罩
			var maskspriteGeright = mylineG.createTag("mask", ruleinfo2.left, ruleinfo2.top);
			maskspriteGeright.setAttribute("id", "linemaskright");
			con.appendChild(maskspriteGeright);

			var maskgright = mylineG.createTag("g");
			maskspriteGeright.appendChild(maskgright);

			var maskrectright = mylineG.createRect(parseFloat(ruleinfo2.horAxisLineLength), parseFloat(ruleinfo2.lenAxisLineLength), "#FFFFFF")
			maskgright.appendChild(maskrectright)
			maskgright.setAttribute("transform","matrix( 1, 0, 0, 1,"+parseFloat(ruleinfo2.left)+","+parseFloat(ruleinfo2.top)+")");
			spritegright.setAttribute("mask", "url(#" + "linemask" + ")")
	
	//----------遮罩创建完毕
	
	
	
			//	//计算横向点间距
			var horPointdistancesoldright = parseInt(ruleinfo2.horAxisLineLength) / (parseInt(ruleinfo2.horAxislength) - 1);
			//计算纵向点的间距
			var lenPointdistancesoldright = parseInt(ruleinfo2.lenAxisLineLength) / (parseInt(ruleinfo2.lenAxislength) - 1);

			//计算横向点间距
			var horPointdistancesright = parseFloat(ruleinfo2.horAxisLineLength) / ((parseFloat(ruleinfo2.horAxislength) - 1) * (parseFloat(ruleinfo.horAxisbetween) + 1));
			//计算纵向点的间距
			var lenPointdistancesright = parseFloat(ruleinfo2.lenAxisLineLength) / ((parseFloat(ruleinfo2.lenAxislength) - 1) * (parseFloat(ruleinfo.lenAxisbetween) + 1));

			//计算横向点间距
			var horPointdistancesright = horPointdistancesoldright;
			//计算纵向点的间距
			var lenPointdistancesright = lenPointdistancesoldright


			var lenAxisOffSetright = parseFloat(ruleinfo2.lenAxisOffSet) * horPointdistancesoldright;
			var horAxisOffSetright = parseFloat(ruleinfo2.horAxisOffSet) * lenPointdistancesoldright;
	
			var drawXFristright = 0;
			var drawXLastright = 0;
			//这里的两个变量是用来处理For循环的  第一个可能为负数  如果是负数  则=-lenAxisOffSet
			//  drawXLast 则== lenAxisLineLength+drawXFrist
			drawXFristright = lenAxisOffSetright * -1;
			drawXLastright = parseFloat(ruleinfo2.lenAxisLineLength) + drawXFristright;
			
	



//-------------------------------------------------------------------------------------------------







//------------------------------------------------------------------------------------------------------------







			//存储变量的对象 
			var variable = {};
			//存放线条的数组
			var linearr = [];


			//创建线条的个数
			var createNum = drawLine_line.length;

			//创建所有的变量
			//把变量放到对象中
			createVal(variable, drawLine_line);
		
			function createVal(vari, arr) {
				for (var i = 0; i < arr.length; i++) {
					var line_one = arr[i][0].variable; //获取变量数组
					//			var nonarr = arr[i][0].non;//获取默认值
					//			console.log(line_one,arr )
					vari[i] = {};
					for (var j = 0; j < line_one.length; j++) {
						vari[i][line_one[j]] = 0; //默认值为0
					}
				}
			}



			//-----------------------------更新变量数组内容 统一换成最小值--------------------------------


			function resetVarliableArr() {
				for (var i = 0; i < scrollbarD.length; i++) {
					var objtest = scrollbarD[i][0];
					//			console.log(scrollbarD)
					var arrtest = objtest.tagetexpression;
					for (var j = 0; j < arrtest.length; j++) {
						//console.log(objtest)
						variable[arrtest[j]][objtest.controlvariables] = parseFloat(objtest.min)
					}
				}
			}
			resetVarliableArr();
			//console.log(variable)



			createAll_Line(drawLine_line);


			function createAll_Line(_arr) {
				for (var num = 0; num < _arr.length; num++) {
					createOne_Line(num, _arr[num])
				}
			}




			function createOne_Line(id, obj) {
				var gs = Parserformula(drawLine_line[id][0].expression, id, obj);
			//	console.log(drawLine_line[id][0].expression, id, obj)
				var myline = new zdwPath(drawLine_line[id][0].color, drawLine_line[id][0].strwid, -200, ruleinfo.lenAxisLineLength + 500, ruleinfo.horAxisLineLength + 500, -500);
				spriteg.appendChild(myline);
				linearr.push(myline)
				var arr = [];
				for (var i = -1000; i < 1000; i++) {
					var x = i / horPointdistances;
					var y;
					//console.log(variable[0].a)
					eval(gs)
					arr.push(translationPos(x * horPointdistances, y * lenPointdistances))
				}

				myline.setD(arr)
			}




			//console.log(variable)



			function Log(txt) {
				//console.log(arguments)
			}






			function drawLineF(id, obj) {
			//	console.log(id, obj)
				var gs = Parserformula(drawLine_line[id][0].expression, id, obj);
				var arr = [];
			//	console.log(gs)
			//	console.log(variable)
				
				
			
			
				for (var i = drawXFrist; i < drawXLast; i++) {
					var x = i / horPointdistances;
					var y;
					//console.log(variable[0].a)
					//			y=Math.sin(x*(variable[1].a))+(variable[1].b);
					eval(gs)
					arr.push(translationPos(x * horPointdistances, y * lenPointdistances))
				}
				
				
				
				linearr[id].setD(arr);
				//	console.log(linearr)
			}






			/**
			 * 处理公式
			 * 左侧  如果平方^转换成Math.pow()
			 * 如果sin  cos  tan   csc
			 * 如果有^标记  则获取标记前后的数字  以及标记后的数字
			 * 解析变量  如果有字母  并且前后为+ - * / =  则  转化成 variable[id]中的[变量]
			 *
			 *
			 * @param {Object} mubiao
			 */
			function Parserformula(mubiao, id, obj ,isMath) {
				var str = "";
				
				
				if(isMath!=false){
					mubiao = mubiao.replace(/\s/g, "")
					SetMath("sin");
					SetMath("cos");
					SetMath("tan");
					SetMath("abs");
					SetMath("pow");
				}
				

				function SetMath(name) {
					var strnum = mubiao.indexOf(name);
					if (strnum != -1) {
						mubiao = mubiao.substring(0, strnum) + "Math." + mubiao.substr(strnum);
					}
				}


				function setVariable() {
					var str = ""
					for (var i = 0; i < mubiao.length; i++) {
						for (var j = 0; j < obj[0].variable.length; j++) {
							if (i == 0) {
								if (mubiao[i] == obj[0].variable[j] && (mubiao[i + 1] == "+" || mubiao[i + 1] == "-" || mubiao[i + 1] == "*" || mubiao[i + 1] == "/" || mubiao[i + 1] == "=" || mubiao[i + 1] == ")" || mubiao[i + 1] == "(" || mubiao[i + 1] == ",")) {
									//	console.log(mubiao[i])
								}
							} else if (i < mubiao.length - 1) {
								if (mubiao[i] == obj[0].variable[j] && (mubiao[i + 1] == "+" || mubiao[i + 1] == "-" || mubiao[i + 1] == "*" || mubiao[i + 1] == "/" || mubiao[i + 1] == "=" || mubiao[i + 1] == ")" || mubiao[i + 1] == "(" || mubiao[i + 1] == ",") && (mubiao[i - 1] == "(" || mubiao[i - 1] == "," || mubiao[i - 1] == "+" || mubiao[i - 1] == "-" || mubiao[i - 1] == "*" || mubiao[i - 1] == "/" || mubiao[i - 1] == "=" || mubiao[i - 1] == ")")) {
									//console.log(mubiao[i])
									//							mubiao[i] = "variable[id][j]"
									mubiao = mubiao.substring(0, i) + "(variable[" + id + "]." + mubiao[i] + ")" + mubiao.substr(i + 1);
								}
							} else {
								if (mubiao[i] == obj[0].variable[j] && (mubiao[i - 1] == "+" || mubiao[i - 1] == "-" || mubiao[i - 1] == "*" || mubiao[i - 1] == "/" || mubiao[i - 1] == "=" || mubiao[i - 1] == ")" || mubiao[i - 1] == "(" || mubiao[i - 1] == ",")) {
									//console.log(mubiao[i])
									//							mubiao[i] = "variable[id][j]"
									mubiao = mubiao.substring(0, i) + "(variable[" + id + "]." + mubiao[i] + ")";
								}
							}
						}
					}
				}

				setVariable();



				//console.log(mubiao)


				str = mubiao;
				return str

			}


			/**
			 *处理标题文字  更改变量字母为数字 
			 */
			function Parserformula2(mubiao,val){
				var str = "";
//				mubiao = mubiao.replace(/\s/g, "")
				//console.log("++++++++++++")
				var arr = mubiao.split("||")
				for(v in val){
					
//					for (var i = 0; i < mubiao.length; i++) {
////						if(mubiao[i]==v&&(mubiao[i + 1] == "+" || mubiao[i + 1] == "-" || mubiao[i + 1] == "*" || mubiao[i + 1] == "/" || mubiao[i + 1] == "=" || mubiao[i + 1] == ")" || mubiao[i + 1] == "(" || mubiao[i + 1] == ",")){
////							mubiao = mubiao.substring(0, i) + val[v] + mubiao.substr(i + 1);
////						}else if(mubiao[i]==v&&(mubiao[i + 1] == "+" || mubiao[i + 1] == "-" || mubiao[i + 1] == "*" || mubiao[i + 1] == "/" || mubiao[i + 1] == "=" || mubiao[i + 1] == ")" || mubiao[i + 1] == "(" || mubiao[i + 1] == ",") && (mubiao[i - 1] == "(" || mubiao[i - 1] == "," || mubiao[i - 1] == "+" || mubiao[i - 1] == "-" || mubiao[i - 1] == "*" || mubiao[i - 1] == "/" || mubiao[i - 1] == "=" || mubiao[i - 1] == ")")){
////							mubiao = mubiao.substring(0, i) + val[v] + mubiao.substr(i + 1);
////						}else if((mubiao[i]==v&&mubiao[i - 1] == "+" || mubiao[i - 1] == "-" || mubiao[i - 1] == "*" || mubiao[i - 1] == "/" || mubiao[i - 1] == "=" || mubiao[i - 1] == ")" || mubiao[i - 1] == "(" || mubiao[i - 1] == ",")){
////							mubiao = mubiao.substring(0, i) + val[v] ;
////						}
//
//						if(i==0){
//							if(mubiao[i]==v&&(mubiao[i + 1] == "+" || mubiao[i + 1] == "-" || mubiao[i + 1] == "*" || mubiao[i + 1] == "/" || mubiao[i + 1] == "=" || mubiao[i + 1] == ")" || mubiao[i + 1] == "(" || mubiao[i + 1] == ",")){
//								mubiao = mubiao.substring(0, i) + val[v] + mubiao.substr(i + 1);
//							}
//						}
//						if(i!=0&&i!=mubiao.length-1){
//							if(mubiao[i]==v&&(mubiao[i + 1] == "+" || mubiao[i + 1] == "-" || mubiao[i + 1] == "*" || mubiao[i + 1] == "/" || mubiao[i + 1] == "=" || mubiao[i + 1] == ")" || mubiao[i + 1] == "(" || mubiao[i + 1] == ",") && (mubiao[i - 1] == "(" || mubiao[i - 1] == "," || mubiao[i - 1] == "+" || mubiao[i - 1] == "-" || mubiao[i - 1] == "*" || mubiao[i - 1] == "/" || mubiao[i - 1] == "=" || mubiao[i - 1] == ")")){
//								mubiao = mubiao.substring(0, i) + val[v] + mubiao.substr(i + 1);
//							}
//						}
//						if(i==mubiao.length-1){
//							if(mubiao[i]==v&&(mubiao[i - 1] == "+" || mubiao[i - 1] == "-" || mubiao[i - 1] == "*" || mubiao[i - 1] == "/" || mubiao[i - 1] == "=" || mubiao[i - 1] == ")" || mubiao[i - 1] == "(" || mubiao[i - 1] == ",")){
//								mubiao = mubiao.substring(0, i) + val[v] ;
//							}
//						}
//
//
////							if(mubiao[i]==v){
////								mubiao = mubiao.substring(0, i) + val[v] + mubiao.substr(i + 1);
////							}
//						console.log(mubiao[i])
//					}
				str = ""
				for(var i = 0;i<arr.length;i++){
					if(arr[i] == v){
						if(val[v]<0){
							//val[v] = "(–"+val[v]*-1+")"
							arr[i] =  "–"+val[v]*-1+""
						}else{
							arr[i] = val[v]
						}
					}
					str+=arr[i] 
					
				}
				
				
			//	console.log(arr)
				

					
				}
				
				
				
				
				
				
				//console.log("-----------------------")
				return str;
			}







			/**
			 *坐标转换方法
			 */
			function translationPos(x, y) {
				var testarr = [];
				x = x + lenAxisOffSet;
				//		x = Math.min(480,Math.max(0, x+lenAxisOffSet))
				y = horAxisOffSet - (y);
				testarr = [x, y];
				return testarr;
			}








			//------------------------------------------------------关于绘制线条逻辑已经结束  ，下面为绘制滚动条逻辑------------------------------------------------------------------------



			var txtFileArr = [];

			function createscrollbar() {
				//_w,_h,_x,_y,_bgc,_fs,_txtinfo,_fontcolor
				for (var i = 0; i < textFile.length; i++) {

					var scrollbar = new zdwTxtAndScroller(textFile[i][0].width, textFile[i][0].height, textFile[i][0].x, textFile[i][0].y, textFile[i][0].bgc, textFile[i][0].fontsize, textFile[i][0].txtinfo,textFile[i][0].fontcolor,textFile[i][0].isshowVariable,textFile[i][0].tagetexpression);
					con.appendChild(scrollbar);

					scrollbar.setcenterTxt()
console.log(scrollbar)
					txtFileArr.push(scrollbar);
				}
				
				
			}


			createscrollbar();





			//----------------------------------------------绘制滚动条文字说明部分结束，下面为绘制滑块部分----------------------------------------------------------------------

			var drawDragArr = [];

			function createScrollDrag() {
				for (var i = 0; i < scrollbarD.length; i++) {
					function t(id) {
						var scrollbar = new zdwDragAndScroller(scrollbarD[id][0].width, scrollbarD[id][0].height, scrollbarD[id][0].x, scrollbarD[id][0].y, scrollbarD[id][0].bgc, scrollbarD[id][0].fontsize, scrollbarD[id][0].tx, scrollbarD[id][0].ty, scrollbarD[id][0].txtinfo, scrollbarD[id][0].fontcolor, scrollbarD[id][0].isShowScrollbar, scrollbarD[id][0].scrollbarLength, scrollbarD[id][0].scrollbarShowNum, scrollbarD[id][0].tagetexpression, scrollbarD[id][0].controlvariables, scrollbarD[id][0].max, scrollbarD[id][0].min, scrollbarD[id][0].scrx, scrollbarD[id][0].scry);
						con.appendChild(scrollbar);
						var left = $("#container").css("left");
						leftnum = parseInt(left.split("px")[0])

						$(scrollbar.drag.kuai).zdw_addEvent("mousedown", function(e) {
							curselected = id;
						})
						drawDragArr.push(scrollbar);
					}
					t(i)
				}
			}

			createScrollDrag();

			//----------------------------------滑块滚动条结束------------------------------------------------------









			$(window).zdw_addEvent("mousemove", function(e) {
				if (curselected != -1) {
					var scrollbar = drawDragArr[curselected];
					var objtest = (scrollbar.setpos(e.zdwX - offsetLeft)) //注意  此处需要减去LEft
//						console.log(objtest)
					scrollbar.settxt(objtest)
					
					
					for(var a = 0;a<txtFileArr.length;a++){
						var txtkuai = txtFileArr[a];
						//console.log(txtFileArr[a].getval())
						if(txtFileArr[a].getval()!=null){
							//txtFileArr[a].textContent2()
							for (var j = 0; j < objtest.expression.length; j++) {
								variable[objtest.expression[j]][objtest.variable] = objtest.pos;
								
								var x = objtest.pos;
//								console.log(drawLine_line[objtest.expression[j]][0].expression)
								var y = (Math.pow(x,3))-(3)*(Math.pow(x,2))-x+3;//这里是要求改粉红色线条的方程*************************************
								var k = 3*Math.pow(x,2)-6*x-1;//这里的数字是UC中的正确答案  是求导公式*******************************************
//								y = k*x+b;
								
								var b = y - k*x;
							//	console.log(x,y,k,b)
								
								drawLine_line[objtest.expression[j]][0].expression = "y="+k+"*x+"+b
								drawLineF(objtest.expression[j], drawLine_line[objtest.expression[j]]);
								point.setPos(translationPos(x * horPointdistances, y * lenPointdistances)[0],translationPos(x * horPointdistances, y * lenPointdistances)[1])
								pointight.setPos(translationPos2(x * horPointdistancesright, k* lenPointdistancesright)[0],translationPos2(x * horPointdistancesright, k* lenPointdistancesright)[1])
			
								
								
								
								if(objtest.expression==txtFileArr[a].getval()){
									
									var txtinfocon = txtFileArr[a].textContent2();
									k = parseFloat(k.toFixed(2))
									if(k%1==0){
										k = k.toFixed(0)
									}else if(k%0.1==0){
										k = k.toFixed(1)
									}
									variable[objtest.expression[j]].y = k;
									txtFileArr[a].settextContent2(Parserformula2(txtinfocon,variable[objtest.expression[j]]));
								}
							}
							
							
						}
					}
					
				}

			})


			$(window).zdw_addEvent("mouseup", function(e) {
				curselected = -1
			})






		function initTxt(){
			for(var i = 0;i<drawDragArr.length;i++){
				
				
					var scrollbar = drawDragArr[i];
					var objtest = (scrollbar.setpos(0)) //注意  此处需要减去LEft
					//	console.log(objtest)
					scrollbar.settxt(objtest)
					
					
					for(var a = 0;a<txtFileArr.length;a++){
						var txtkuai = txtFileArr[a];
						//console.log(txtFileArr[a].getval())
						if(txtFileArr[a].getval()!=null){
							//txtFileArr[a].textContent2()
							for (var j = 0; j < objtest.expression.length; j++) {
								variable[objtest.expression[j]][objtest.variable] = objtest.pos;
								
								
								var x = objtest.pos;
//								console.log(drawLine_line[objtest.expression[j]][0].expression)
								var y = (Math.pow(x,3))-(3)*(Math.pow(x,2))-x+3;//这里是要求改粉红色线条的方程*************************************
								var k = 3*Math.pow(x,2)-6*x-1;//这里的数字是UC中的正确答案  是求导公式*******************************************
//								y = k*x+b;
								
								var b = y - k*x;
							//	console.log(x,y,k,b)
								
								
								point.setPos(translationPos(x * horPointdistances, y * lenPointdistances)[0],translationPos(x * horPointdistances, y * lenPointdistances)[1])
								pointight.setPos(translationPos2(x * horPointdistancesright, k* lenPointdistancesright)[0],translationPos2(x * horPointdistancesright, k* lenPointdistancesright)[1])
			
								drawLine_line[objtest.expression[j]][0].expression = "y="+k+"*x+"+b
								drawLineF(objtest.expression[j], drawLine_line[objtest.expression[j]]);
								
								
								
								
								
//								drawLineF(objtest.expression[j], drawLine_line[objtest.expression[j]]);
								if(objtest.expression==txtFileArr[a].getval()){
									
									var txtinfocon = txtFileArr[a].textContent2();
									k = parseFloat(k.toFixed(2))
									if(k%1==0){
										k = k.toFixed(0)
									}else if(k%0.1==0){
										k = k.toFixed(1)
									}
									variable[objtest.expression[j]].y = k;
									txtFileArr[a].settextContent2(Parserformula2(txtinfocon,variable[objtest.expression[j]]));
								}
							}
							
							
						}
					}
				
				
				
			}
		}
		
		
		initTxt();
	spriteg.appendChild(point)	;
	
	//---------------------------------------------------到此为止  左侧的所有逻辑都已经结束  ------------------------------------------
	
	
	

	
	function createRightLine(){
		var mylineright = new zdwPath("rgba(0,150,0,1)",2	, -200, ruleinfo2.lenAxisLineLength + 500, ruleinfo2.horAxisLineLength + 500, -500);
		spritegright.appendChild(mylineright);
		var arr = [];
				for (var i = drawXFristright; i < drawXLastright; i++) {
					var x = i / horPointdistancesright;
					var y;
					//console.log(variable[0].a)
					//			y=Math.sin(x*(variable[1].a))+(variable[1].b);
					y = 4*Math.pow(x,3)-8*Math.pow(x,2);//***************************************************************************************************
					
					arr.push(translationPos2(x * horPointdistancesright, y * lenPointdistancesright))
			}
				
				
		//	pointight.setPos(translationPos2(x * horPointdistancesright, y * lenPointdistancesright)[0],translationPos2(x * horPointdistancesright, y * lenPointdistancesright)[1])
						
				
		//	console.log(translationPos2(x * horPointdistancesright, y * lenPointdistancesright),"++++++++++")
			mylineright.setD(arr)
	}
	//createRightLine();
	//spritegright.appendChild(pointight)
	
		/**
			 *坐标转换方法
			 */
			function translationPos2(x, y) {
				var testarr = [];
				x = x + lenAxisOffSetright;
				//		x = Math.min(480,Math.max(0, x+lenAxisOffSet))
				y = horAxisOffSetright - (y);
				testarr = [x, y];
				return testarr;
			}
	
	
	

}
		
	
		
		
		
		win.mainpath = mainpath;







		})(window)