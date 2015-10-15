/**
 *这里是文档类
 * 入口函数
 */


(function(win) {
		var contro ;
	//加载图片过程 
	zdwconfig = win.zdw_config;
	var pics = ["MyPic", "HC", "TAM", "ASP", "FLP", "FBP", "ZXC", "SX", "BF", "Bus", "LP", "crystal", "fly", "JSP", "CSSP", "HTMLP"]
		//创建数组存放图片\n
	var AnimPicArr = [];
	var loadingShow = true; //加载进度是否显示
	var speedAnimation = 1; //动画播放速度

	var MyLife = $("#MyLife");
	var curFrame = 0;

	var timeout, Req;

	var curMonth = 0; //当前时间进度，单位是月份
	//一共需要
	var myHead;
	
	
	var isShowTxt = false;
	var isPlayAnimation = false;//
	var playid = 0;//播放动画的ID号
	var huoche;//火车
	var tianam;//天安门
	var myTxt;//显示文字对象
	var as3;//as3.0
	var FL;//Flash
	var FB;//FlashBuilder
	var zxc;//自行车
	var sx;//首享科技大厦
	var bf;//暴风
	var bus;//Bus
	var lp;//路牌
	var sjs;//水晶石
	var jsP;//js
	var cssP;//css
	var htmlP;//html
	
	var  bing1;//第一个饼状图
	var bing2;
	
	
	var FPS;
	if($.isSupportMobile()){
		FPS = 25;
	}else{
		FPS = 60;
	}
	
	
	
	
var timeoneMonth 
var stageWC = $(win).width() / 2;
		var stageHC = $(win).height() / 2
	//-----------------------------------------------加载逻辑-------------------------------------
	function LoadRec() {
		ZDWTool.LoadPic(pics[AnimPicArr.length], AnimPicArr, function() {
			if (AnimPicArr.length == pics.length) {
				ZDWTool.Log("全部加载完毕")
				$(".Loading").css("opacity", 0);
				loadingShow = false;
				setTimeout(function() {
					$(".Loading").remove(); //删除Loading
					initEnd(); //加载完毕后开始播放动画
				}, 100)
			} else {
				LoadRec();
			}
			$(".Loading").html("LoadIng..." + AnimPicArr.length + "/" + pics.length)
		})
	}

	LoadRec();

	//---------------------加载图片－－－－－－－－－－－－－－－－－-----



	//--------------------------------控制Loading------------------------------------

	function controlLoadingDiv() {
		$(window).zdw_addEvent("mousemove", function(e) {
			if (loadingShow) {
				$(".Loading").css("transform", "matrix(1,0,0,1," + (e.zdwX - 150) + "," + (e.zdwY - 50) + ")")
			}
		})
	}

	controlLoadingDiv();
	//--------------------------------控制Loading完毕－－－－－－－－－－－－－


	function initEnd() {
		
			//_________制作时间轴－－－－－－－－－－－－－－－
		var timeLine

		function createTimeLine() {
			timeLine = new zdw_timeLine();
			MyLife.append(timeLine);
		}
		createTimeLine()
			//--------------------时间轴制作完毕--------------------------


		//-----------------------------创建我的头像
		function createMyHead() {
			 myHead = zdw_createhead(AnimPicArr[0], stageWC, stageHC)
			MyLife.append(myHead);
			
		}
		createMyHead();

		//-------------------------------头像创建完毕－－－－－－－－－－－－－



		//-------------------------------创建动态元素－－－－－－－－－－－－－－－
		
		function createobj(){
			 huoche = zdw_AnimObj(AnimPicArr[1],200);
			MyLife.append(huoche);
			huoche.setCss(0,[-200,stageHC],0,1);
			
			tianam =  zdw_AnimObj(AnimPicArr[2],200);
			MyLife.append(tianam);
			tianam.setCss(0,[-200,stageHC*0.3],0,1);
			
			bing1 = zdw_createBingPic([["rgb(206,65,89)","rgb(255,255,255)",3,360],["rgb(96,183,239)","rgb(255,255,255)",3,270],["rgb(149,205,99)","rgb(255,255,255)",3,180]],10)
			MyLife.append(bing1)
			
			as3 =  zdw_AnimObj(AnimPicArr[3],50);
			MyLife.append(as3);
			as3.setPos(stageWC-120,stageHC-10);
			as3.setScale(0,[0,0],0,0,0)
			
			FL =  zdw_AnimObj(AnimPicArr[4],50);
			MyLife.append(FL);
			FL.setPos(stageWC+60,stageHC-60);
			FL.setScale(0,[0,0],0,0,0)
			
			FB =  zdw_AnimObj(AnimPicArr[5],50);
			MyLife.append(FB);
			FB.setPos(stageWC+60,stageHC+60);
			FB.setScale(0,[0,0],0,0,0)
			
			zxc = zdw_AnimObj(AnimPicArr[6],120);
			MyLife.append(zxc);
			zxc.setCss(0,[-200,stageHC],0,1);
			
			sx = zdw_AnimObj(AnimPicArr[7],60);
			MyLife.append(sx);
			sx.setCss(0,[-200,stageHC*0.3],0,1);
			
			bf = zdw_AnimObj(AnimPicArr[8],150);
			MyLife.append(bf);
			bf.setCss(0,[-200,stageHC*0.5],0,1);
			
			bus = zdw_AnimObj(AnimPicArr[9],200);
			MyLife.append(bus);
			bus.setCss(0,[-200,stageHC],0,1);
			
			lp = zdw_AnimObj(AnimPicArr[10],100);
			MyLife.append(lp);
			lp.setCss(0,[-200,stageHC*0.3],0,1);
			
			sjs = zdw_AnimObj(AnimPicArr[11],300);
			MyLife.append(sjs);
			sjs.setCss(0,[-300,stageHC*0.3],0,1);
			
			bing2 = zdw_createBingPic([["rgb(255,192,0)","rgb(255,255,255)",3,360],["rgb(235,117,19)","rgb(255,255,255)",3,240],["rgb(60,188,191)","rgb(255,255,255)",3,120]],10)
			MyLife.append(bing2)
			
			jsP =  zdw_AnimObj(AnimPicArr[13],50);
			MyLife.append(jsP);
			jsP.setPos(stageWC-120,stageHC-30);
			jsP.setScale(0,[0,0],0,0,0)
			
			cssP =  zdw_AnimObj(AnimPicArr[14],50);
			MyLife.append(cssP);
			cssP.setPos(stageWC+60,stageHC-30);
			cssP.setScale(0,[0,0],0,0,0)
			
			htmlP =  zdw_AnimObj(AnimPicArr[15],50);
			MyLife.append(htmlP);
			htmlP.setPos(stageWC,stageHC+120);
			htmlP.setScale(0,[0,0],0,0,0)
			
			
		}
		createobj();
		
		
		
		//----------------------------创建动态元素完毕－－－－－－－－－－－－－－

		//移动一个月需要用的帧数
		 timeoneMonth = timeLine.getjiange() / speedAnimation;


		function EnterFrame() {
			if(isShowTxt){
				cancelAnimationFrame(Req);
				clearTimeout(timeout)
			}else{
				curFrame += 1;
				curMonth = Math.floor(curFrame / timeoneMonth);
				timeLine.setLinePos(timeLine.getLinePos() + speedAnimation)
				PlayAnimation(curMonth)
			//	console.log(curMonth)
			}
			


			timeout = setTimeout(function() {
				Req = requestAnimationFrame(EnterFrame)
			}, 1000 / FPS)


		}

		EnterFrame();
	}




	/**
	 *	用来操作动画执行的逻辑判断
	 * 传递参数是时间轴执行的当前月份，但是月份不够准确，所以需要额外增加开关变量
	 */
	function PlayAnimation(pos) {
		if(controlPlayAnimation[pos]!=undefined&&pos!=undefined){
			controlPlayAnimation[pos](pos);
//			console.log(pos)
		}
	}



//控制动画播放
	var controlPlayAnimation = {
		1:function(pos){
			if(pos!=playid){
				playid = pos;
				 myTxt = zdw_createTxt(zdwconfig.txtInfo[pos]);
				 myTxt.setPos(100,100)
				MyLife.append(myTxt);
				console.log("%c 稍后我将把所有的思路与逻辑在这里console出来","color:red")
			}
		},

		4:function(pos){
			if(pos!=playid){
				playid = pos;
				huoche.setCss((timeoneMonth*2)/FPS,[stageWC-80,stageHC],1,1);
				myTxt.clear()
			}
		},
		6:function(pos){
			if(pos!=playid){
				playid = pos;
				tianam.setCss((timeoneMonth*2)/FPS,[stageWC*0.3-80,stageHC*0.3],1,1)
				 myTxt = zdw_createTxt(zdwconfig.txtInfo[pos]);
				 myTxt.setPos(400,150)
				MyLife.append(myTxt);
			}
		},
		10:function(pos){
			if(pos!=playid){
				playid = pos;
				huoche.setCss((timeoneMonth*2)/FPS,[stageWC+80,stageHC],1,0)
				tianam.setCss((timeoneMonth*2)/FPS,[stageWC*0.3+80,stageHC*0.3],1,0);
				myTxt.clear()
			}
		},
		//2011年12月
		12:function(pos){
			if(pos!=playid){
				playid = pos;
				
				 as3.setScale(0.2,[1,1],1,1,1);
				 FL.setScale(0.2,[1,1],1,1,1.1)
				 FB.setScale(0.2,[1,1],1,1,1.2)
				 bing1.play()
				  myTxt = zdw_createTxt(zdwconfig.txtInfo[pos]);
				 myTxt.setPos(300,80)
				MyLife.append(myTxt);
			}
		},
		14:function(pos){
			if(pos!=playid){
				playid = pos;
				bing1.stop();//此处需要手动停止时间轴
			}
		},
		18:function(pos){
			if(pos!=playid){
				playid = pos;
				bing1.play2();
				as3.setScale(0.2,[0,0],1,0,0.3);
				 FL.setScale(0.2,[0,0],1,0,0.2)
				 FB.setScale(0.2,[0,0],1,0,0.1);
				 myTxt.clear()
			}
		},
		//2012年的8月
		20:function(pos){
			if(pos!=playid){
				playid = pos;
				bing1.stop();//此处需要手动停止时间轴
				myTxt = zdw_createTxt(zdwconfig.txtInfo[pos]);
				 myTxt.setPos(300,80)
				MyLife.append(myTxt);
			}
		},
		25:function(pos){
			if(pos!=playid){
				playid = pos;
				bing1.stop();//此处需要手动停止时间轴
				myTxt.clear()
			}
		},
		27:function(pos){
			if(pos!=playid){
				playid = pos;
				myTxt = zdw_createTxt(zdwconfig.txtInfo[pos]);
				 myTxt.setPos(300,80)
				MyLife.append(myTxt);
				zxc.setCss((timeoneMonth*2)/FPS,[stageWC-80,stageHC],1,1);
			}
		},
		//24表示2012年的12月
		//2013年6月进入暴风  30
		//36表示2013年的12月
		//2014年的2月离开暴风进入水晶石 38
		//2014年9月离开水晶石在万邦  45
		//48表示2014年的12月
		//2015年10月  58
		30:function(pos){
			if(pos!=playid){
				playid = pos;
				myTxt.clear()
				console.log("2013年6月进入暴风")
			}
		},
		32:function(pos){
			if(pos!=playid){
				playid = pos;
				sx.setCss((timeoneMonth*6)/FPS,[stageWC*2.1,stageHC*0.3],1,1)
				myTxt = zdw_createTxt(zdwconfig.txtInfo[pos]);
				 myTxt.setPos(300,80)
				MyLife.append(myTxt);
					
			}
		},
		34:function(pos){
			if(pos!=playid){
				playid = pos;
				bf.setCss((timeoneMonth*2)/FPS,[stageWC*0.3-80,stageHC*0.5],1,1);
				myTxt = zdw_createTxt(zdwconfig.txtInfo[pos]);
				 myTxt.setPos(300,80)
				MyLife.append(myTxt);
			}
		},
		36:function(pos){
			if(pos!=playid){
				playid = pos;
				myTxt = zdw_createTxt(zdwconfig.txtInfo[pos]);
				 myTxt.setPos(300,80)
				MyLife.append(myTxt);
				zxc.setCss((timeoneMonth*2)/FPS,[stageWC+80,stageHC],1,0);
				bf.setCss((timeoneMonth*2)/FPS,[stageWC*0.3+80,stageHC*0.5],1,0);
			}
		},
		38:function(pos){
			if(pos!=playid){
				playid = pos;
				console.log("2014年的2月离开暴风进入水晶石")
				myTxt = zdw_createTxt(zdwconfig.txtInfo[pos]);
				 myTxt.setPos(300,80)
				MyLife.append(myTxt);
				bus.setCss((timeoneMonth*2)/FPS,[stageWC-80,stageHC],0,1);
			}
		},
		40:function(pos){
			if(pos!=playid){
				playid = pos;
				console.log("2014年的2月离开暴风进入水晶石")
				lp.setCss((timeoneMonth*6)/FPS,[stageWC*2.1,stageHC*0.3],1,1)
			}
		},
		42:function(pos){
			if(pos!=playid){
				playid = pos;
				console.log("2014年的2月离开暴风进入水晶石")
				myTxt = zdw_createTxt(zdwconfig.txtInfo[pos]);
				 myTxt.setPos(300,80)
				MyLife.append(myTxt);
				sjs.setCss((timeoneMonth*2)/FPS,[stageWC*0.3-80,stageHC*0.5],1,1);
			}
		},
		45:function(pos){
			if(pos!=playid){
				playid = pos;
				console.log("2014年9月离开水晶石在万邦")
				myTxt = zdw_createTxt(zdwconfig.txtInfo[pos]);
				 myTxt.setPos(300,80)
				MyLife.append(myTxt);
				sjs.setCss((timeoneMonth*2)/FPS,[stageWC*0.3+80,stageHC*0.5],1,0);
				bus.setCss((timeoneMonth*2)/FPS,[stageWC+80,stageHC],1,0);
			}
		},
		47:function(pos){
			if(pos!=playid){
				playid = pos;
				console.log("到了今天")
				myTxt = zdw_createTxt(zdwconfig.txtInfo[pos]);
				 myTxt.setPos(300,80)
				MyLife.append(myTxt);
			}
		},
		50:function(pos){
			if(pos!=playid){
				playid = pos;
				bing2.play()
				 jsP.setScale(0.2,[1,1],1,1,1);
				 cssP.setScale(0.2,[1,1],1,1,1.1)
				 htmlP.setScale(0.2,[1,1],1,1,1.2)
				 myTxt = zdw_createTxt(zdwconfig.txtInfo[pos]);
				 myTxt.setPos(300,80)
				MyLife.append(myTxt);
			}
		},
		54:function(pos){
			if(pos!=playid){
				playid = pos;
				bing2.play2()
				jsP.setScale(0.2,[0,0],1,0,0.3);
				 cssP.setScale(0.2,[0,0],1,0,0.2)
				 htmlP.setScale(0.2,[0,0],1,0,0.1);
			}
		},
		55:function(pos){
			if(pos!=playid){
				playid = pos;
				myTxt = zdw_createTxt(zdwconfig.txtInfo[pos]);
				 myTxt.setPos(300,80)
				MyLife.append(myTxt);
				myHead.clear();
			}
		},
		58:function(pos){
			if(pos!=playid){
				playid = pos;
				console.log("到了今天");
				contro = new zdw_ControlIframe();
			}
		},
		60:function(pos){
			if(pos!=playid){
				playid = pos;
				isShowTxt= true;
				
				MyLife.css("opacity",0);
				setTimeout(function(){
					MyLife.css("display","none");
				},1000)
				
			}
		},
	};






})(window)