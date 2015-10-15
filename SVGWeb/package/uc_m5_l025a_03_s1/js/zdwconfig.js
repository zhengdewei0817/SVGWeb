//这里存储的是配置文件信息

/**
 * 舞台初始化信息   stageinfo
 * 刻度信息 ruleinfo
 * @param {Object} win
 */

(function(win){
	win.zdwconfig = {
		//舞台信息
		stageinfo:{
			svgWidth:"300",//svg的宽度
			svgHeight:"380",//svg的高度
			isCreateCanvas:true,//是否创建背景
			canvasWidth:"100%",//生成背景的宽度
			canvasHeight:"100%",//生成背景的高度
			canvasColor:"rgba(216,225,235,0)",//背景颜色
			isShowPoint:true,//是否显示背景的间距点
			isShowPoint2:true,//右侧是否显示间距点
			PointColor:"#666666",//背景间距点的颜色
			PointSize:"1px",//背景间距点的半径var
			SVGName:"ucm5l02204s1",//svg的id
		},
		//刻度尺信息
		ruleinfo:{
			top:"30",//刻度尺容器顶部距离
			left:"40",//刻度尺容器左侧距离
			showAxis:true,//是否显示坐标
			isShowZore:false,//是否显示0点刻度
			horAxisfirst:"-10",//横向刻度的起始坐标
			horAxislast:"11",//横向坐标的终止坐标
			horAxislength:"22",//横向坐标显示多少位数字
			horAxisbetween:"0",//横向单位坐标轴中包含多少间隔
			horAxisShow:true,//是否显示横向坐标
			horAxisShowArrow:true,//是否显示坐标箭头
			horAxisLineLength:"230",//横向刻度长度
			horAxisOffSet:"10",//横坐标的纵向偏移量，默认为最顶部  0为第一个  1为第二个
			isShowhorAxisTxt:false,//是否显示横向原有数字刻度
			isAddNewhorAxisTxt:true,//是否添加新的文本刻度
			//NewhorAxis:[{txt:"{x}",x:"230",y:"135"},{txt:"2",x:"125",y:"135"},{txt:"4",x:"148",y:"135"},{txt:"6",x:"171",y:"135"},{txt:"8",x:"194",y:"135"},{txt:"–2",x:"75",y:"135"},{txt:"–4",x:"52",y:"135"},{txt:"–6",x:"32",y:"135"},{txt:"–8",x:"10",y:"135"}],//横坐标刻度添加的文字信息，包括内容，x，y
			NewhorAxis:[{txt:"{x}",x:"230",y:"135"},{txt:"4",x:"148",y:"135"},{txt:"8",x:"194",y:"135"},{txt:"–4",x:"52",y:"135"},{txt:"–8",x:"10",y:"135"}],//横坐标刻度添加的文字信息，包括内容，x，y
			
			lenAxisfirst:"-10",//纵向刻度的起始坐标
			lenAxislast:"10",//纵向坐标的终止坐标
			lenAxislength:"21",//纵向坐标显示多少位数字
			lenAxisbetween:"0",//纵向单位坐标轴中包含多少间隔
			lenAxisShow:true,//是否显示纵向坐标
			lenAxisShowArrow:true,//是否显示坐标箭头
			lenAxisLineLength:"230",//纵向刻度长度
			lenAxisOffSet:"10",//纵坐标的纵向偏移量，默认为最左侧
			isShowlenAxisTxt:false,//是否显示纵向原有数字刻度
			isAddNewlenAxisTxt:true,//是否添加新的文本刻度
			//NewlenAxis:[{txt:"{y}",x:"85",y:"0"},{txt:"0",x:"95",y:"130"},{txt:"2",x:"95",y:"100"},{txt:"4",x:"95",y:"75"},{txt:"6",x:"95",y:"50"},{txt:"8",x:"95",y:"30"},{txt:"-2",x:"90",y:"145"},{txt:"-4",x:"90",y:"165"},{txt:"-6",x:"90",y:"190"},{txt:"-8",x:"90",y:"215"}],//纵坐标刻度添加的文字信息，包括内容，x，y
			NewlenAxis:[{txt:"{y}",x:"85",y:"0"},{txt:"0",x:"95",y:"130"},{txt:"4",x:"95",y:"75"},{txt:"8",x:"95",y:"30"},{txt:"–4",x:"85",y:"165"},{txt:"–8",x:"85",y:"215"}],//纵坐标刻度添加的文字信息，包括内容，x，y
		},
		ruleinfo2:{
			top:"30",//刻度尺容器顶部距离
			left:"320",//刻度尺容器左侧距离
			showAxis:true,//是否显示坐标
			isShowZore:false,//是否显示0点刻度
			horAxisfirst:"-10",//横向刻度的起始坐标
			horAxislast:"11",//横向坐标的终止坐标
			horAxislength:"22",//横向坐标显示多少位数字
			horAxisbetween:"0",//横向单位坐标轴中包含多少间隔
			horAxisShow:true,//是否显示横向坐标
			horAxisShowArrow:true,//是否显示坐标箭头
			horAxisLineLength:"230",//横向刻度长度
			horAxisOffSet:"10",//横坐标的纵向偏移量，默认为最顶部  0为第一个  1为第二个
			isShowhorAxisTxt:false,//是否显示横向原有数字刻度
			isAddNewhorAxisTxt:true,//是否添加新的文本刻度
			//NewhorAxis:[{txt:"{x}",x:"230",y:"135"},{txt:"2",x:"125",y:"135"},{txt:"4",x:"148",y:"135"},{txt:"6",x:"171",y:"135"},{txt:"8",x:"194",y:"135"},{txt:"–2",x:"75",y:"135"},{txt:"–4",x:"52",y:"135"},{txt:"–6",x:"32",y:"135"},{txt:"–8",x:"10",y:"135"}],//横坐标刻度添加的文字信息，包括内容，x，y
			NewhorAxis:[{txt:"{x}",x:"230",y:"135"},{txt:"4",x:"148",y:"135"},{txt:"8",x:"194",y:"135"},{txt:"–4",x:"52",y:"135"},{txt:"–8",x:"10",y:"135"}],//横坐标刻度添加的文字信息，包括内容，x，y
			
			lenAxisfirst:"-10",//纵向刻度的起始坐标
			lenAxislast:"10",//纵向坐标的终止坐标
			lenAxislength:"21",//纵向坐标显示多少位数字
			lenAxisbetween:"0",//纵向单位坐标轴中包含多少间隔
			lenAxisShow:true,//是否显示纵向坐标
			lenAxisShowArrow:true,//是否显示坐标箭头
			lenAxisLineLength:"230",//纵向刻度长度
			lenAxisOffSet:"10",//纵坐标的纵向偏移量，默认为最左侧
			isShowlenAxisTxt:false,//是否显示纵向原有数字刻度
			isAddNewlenAxisTxt:true,//是否添加新的文本刻度
			//NewlenAxis:[{txt:"{y}",x:"85",y:"0"},{txt:"0",x:"95",y:"130"},{txt:"2",x:"95",y:"100"},{txt:"4",x:"95",y:"75"},{txt:"6",x:"95",y:"50"},{txt:"8",x:"95",y:"30"},{txt:"-2",x:"90",y:"145"},{txt:"-4",x:"90",y:"165"},{txt:"-6",x:"90",y:"190"},{txt:"-8",x:"90",y:"215"}],//纵坐标刻度添加的文字信息，包括内容，x，y
			NewlenAxis:[{txt:"{y}",x:"85",y:"0"},{txt:"0",x:"95",y:"130"},{txt:"4",x:"95",y:"75"},{txt:"8",x:"95",y:"30"},{txt:"–4",x:"85",y:"165"},{txt:"–8",x:"85",y:"215"}],//纵坐标刻度添加的文字信息，包括内容，x，y
		
		},
		/**
		 * 这里是绘制具体线条
		 */
		drawLine:{
			line:[
				[
					{
						color:"rgb(253,184,63)",//线条颜色
						strwid:"2",//线条粗细
						expression:"y=1.4*x+4.49",
						variable:["a","b"],//变量
						non:[2,3],//默认值
					}
				],
				[
					{
						color:"rgb(0,150,0)",//线条颜色
						strwid:"2",//线条粗细
						expression:"y=pow((x),3)-(3)*Math.pow(x,2)-x+3",
						variable:[],//变量
						non:[2,3],//默认值
					}
				],
				
			]
		},
		/**
		 * 文字说明
		 * 生成公式的组件
		 */
		textFile:{
			txt:[
				
					[
					{
						width:"180",//宽度
						height:"25",//高度
						bgc:"rgba(255,255,255,0)",//背景颜色
						txtinfo:"f({x}) = {x}³ – 3{x}² – {x} +3",//要显示的文字内容
						fontsize:"14",//要显示的文字字号
						x:"50",//x坐标
						y:"270",//y坐标
						fontcolor:"rgb(0,150,0)",//文字颜色
						isshowVariable:false,//是否显示变量值
						tagetexpression:0,//目标公式
					}
				],
				[
					{
						width:"180",//宽度
						height:"25",//高度
						bgc:"rgba(255,255,255,0)",//背景颜色
						txtinfo:"{B} (||x|| , ||y||)",//要显示的文字内容
						fontsize:"14",//要显示的文字字号
						x:"335",//x坐标
						y:"270",//y坐标
						fontcolor:"rgba(25,82,195,0)",//文字颜色
						isshowVariable:true,//是否显示变量值
						tagetexpression:0,//目标公式
					}
				],
			
				
				
			]
		},
		/**
		 * 滚动条
		 */
		scrollbarD:{
			scr:[
				[
					{
						width:"340",//宽度
						height:"60",//高度
						bgc:"rgba(221,244,186,0)",//背景颜色
						txtinfo:"{x}=–2.5",//要显示的文字内容
						fontsize:"20",//要显示的文字字号
						tx:"20",//文字横向坐标
						ty:"35",//文字的纵向坐标
						x:"0",//x坐标
						y:"300",//y坐标
						fontcolor:"#000000",//文字颜色
						isShowScrollbar:true,//是否显示滚动条
						scrollbarLength:"150",//滚动条长度
						scrollbarShowNum:"11",//显示滚动条刻度个数
						tagetexpression:[0],//目标公式
						controlvariables:"x",//控制变量名称
						max:"2.3",//变量最大值
						min:"-1.2",//变量最小值
						scrx:"90",//滑块X
						scry:"10",//滑块的Y
					}
				],
				
				

				
			]
		}
		
	}
	
	
	
	
	
})(window)
