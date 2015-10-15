(function (wnd) {


	var api
    var InteractiveActivity = function (_api) {
    	api = _api;
        init();
    };
	
	var soundsrc1 = "Sound/sound1(klik).mp3";
	var snd1;
	
	var soundsrc2 = "Sound/sound51.mp3";
	var snd2;
	
    var p = InteractiveActivity.prototype;


   
//$(function(){
//	init()
//})
//	


	
	var svg;
	var mouseY = 0;
	var mouseoldY = 0;
	var isDown = false;
	var FPS = 25
	var firstMatrix = "";
	var posbili = 0;//滚动条占比例
	
	
	
	
	var pianyiX = 374.95;
	var pianyiY = 0;
	
	var col1
	var col2
	var LightF;
	var dimianSnapDom;

	var treeArray = new Array();
	
	var yz1,yz2,yz3,yz4,yz5,yz6,yz7,yz8,yz9,yun1,yun2,yun3,yun4;
	var startmask
	
	var yuncloud;//云动画

	var anniu

//	$(function(){
//		init()
//	})

    function init() {
       LoadSVG();
       pianyiY= 30
      // initSound();
    }
    
    function initSound(){
		api.initSound(soundsrc1, callback1, onEndCallback1);
		api.initSound(soundsrc2, callback2, onEndCallback2);
	}
	var callback1 = {
		onSoundCreated: function(sound, src) {
			snd1 = sound;
		}
	};
	var onEndCallback1 = {
		onEnd: function() {
			console.log("on sound complete");
		}
	};
	var callback2 = {
		onSoundCreated: function(sound, src) {
			snd2 = sound;
		}
	};
	var onEndCallback2 = {
		onEnd: function() {
			console.log("on sound complete");
		}
	};
    function LoadSVG(){
        	Snap.load("UI/uc_b4_l063_02_a01syouhua.svg",function(_svg){
			svg = _svg;
			 dimianSnapDom = $("#dimianyinying");
			addSVG();
		})
    }
    
    function addSVG(){
		$("#container").append(svg.node);
		$("#container").css({"left":offsetLeft})
		firstMatrix = $("#anniu").attr("transform");
		 col1 = $("#one").zdw_initColor([{'fr1': ["56,78,124"]}, {'fr50': ["61,113,175"]},{'fr100': ["136,172,215"]},{'fr150': ["86,208,254"]}], 150)
		 col2 = $("#two").zdw_initColor([{'fr1': ["5,7,12"]}, {'fr50': ["170,185,217"]},{'fr100': ["228,233,243"]},{'fr150': ["213,253,255"]}], 150);
		 startmask = $("#Mask_xingzhemask").zdw_init([{'fr1': [ 1, 0, 0, 1, 0.05,0]},{'fr20': [1, 0, 0, 0.075897216796875, 0.05,-18]},{'fr150':[1, 0, 0, 0.075897216796875, 0.05,-18]}],150);
		//yuncloud = new ImageAnimation('cloud', 'img/cloud.json')
		addTreeToArr();
		addClude()
		anniu = document.getElementById("anniu");
		addDragEvent();
	//	upEnterFrame();

	}
    
    
    
//  //添加树叶到数组中
    function addTreeToArr(){
//  	
    	yz1 =  $("#yz1").zdw_init([{'fr1': [0.3255462646484375, -0.570648193359375, 0.553741455078125, 0.526214599609375, 5.45,-83.5]},{'fr29': [0.3255462646484375, -0.570648193359375, 0.553741455078125, 0.526214599609375, 5.45,-83.5]},{'fr150':[0.544921875, 0.544921875, -0.544921875, 0.544921875, 21.35,-42.3]}],150);
    	treeArray.push(yz1)
    	
    	yz2 =  $("#yz2").zdw_init([{'fr1': [0.289031982421875, -0.027374267578125, -0.11224365234375, 0.871337890625, 4.55,32.55]},{'fr150': [ 0.5057830810546875, 0.41827392578125, -0.69549560546875, 0.5367584228515625, 23.7,48.85]}],150);
    	treeArray.push(yz2)
    	
    	yz3 =  $("#yz3").zdw_init([{'fr1': [-0.03314208984375, -0.767791748046875, -0.2827606201171875, 0.01220703125, -24.3,28.85]},{'fr26': [-0.03314208984375, -0.767791748046875, -0.2827606201171875, 0.01220703125, -24.3,28.85]},{'fr150':[-0.760101318359375, 0.119415283203125, 0.119415283203125, 0.760101318359375, -54.2,56.45]}],150);
    	treeArray.push(yz3)
    	
    	yz4 =  $("#yz4").zdw_init([{'fr1': [-0.3845977783203125, -0.1782684326171875, -0.18377685546875, 0.8558197021484375, 20.75,-21.9]},{'fr150':[0.5348052978515625, -0.376312255859375, -0.6492767333984375, -0.587066650390625, 50.9,10.9]}],150);
    	treeArray.push(yz4)
    	
    	yz5 =  $("#yz5").zdw_init([{'fr1': [-0.2594451904296875, 0.058013916015625, -0.002288818359375, 0.878143310546875, -36.75,25.95]},{'fr150':[-0.725860595703125, 0.1623077392578125, -0.002288818359375, 0.878143310546875, -45.95,28]}],150);
    	treeArray.push(yz5)
    	
    	yz6 =  $("#yz6").zdw_init([{'fr1': [0.457000732421875, -0.457000732421875, 0.2582244873046875, 0.2582244873046875, 10.4,-88.65]},{'fr15': [0.457000732421875, -0.457000732421875, 0.2582244873046875, 0.2582244873046875, 10.4,-88.65]},{'fr150':[0.717315673828125, 0, 0, 0.717315673828125, 22.2,-91.2]}],150);
    	treeArray.push(yz6)
    	
    	yz7 =  $("#yz7").zdw_init([{'fr1': [0.1516571044921875, -0.1742401123046875, 0.4358062744140625, 0.5951690673828125, -15.55,-9.7]},{'fr150':[-0.0380859375, -0.54974365234375, 0.72900390625, 0.1126861572265625, -26.85,-4.95]}],150);
    	treeArray.push(yz7)
    	
    	yz8 =  $("#yz8").zdw_init([{'fr1': [0.2354583740234375, -0.205963134765625, 0.4171905517578125, 0.7707061767578125, -14.4,-50.5]},{'fr23': [0.2354583740234375, -0.205963134765625, 0.4171905517578125, 0.7707061767578125, -14.4,-50.5]},{'fr150':[0.287506103515625, -0.5885162353515625, 0.6834259033203125, 0.549224853515625, -20.2,-52.45]}],150);
    	treeArray.push(yz8)
    	
    	yz9 =  $("#yz9").zdw_init([{'fr1': [0.61944580078125, -0.2128448486328125, 0.0948944091796875, 0.871612548828125, 2.5,-22.15]},{'fr150':[0.64288330078125, 0.125396728515625, -0.3536224365234375, 0.802276611328125, 14.45,-13.7]}],150);
    	treeArray.push(yz9)
    	
    }
    
    
    
    function addClude(){
    	yun1 = $("#yun1").zdw_init([{'fr1':[-1.399993896484375, 0, 0, 1.399993896484375, 161,104,0]},{'fr45':[-1.399993896484375, 0, 0, 1.399993896484375, 161,104,0]},{'fr50':[-1.399993896484375, 0, 0, 1.399993896484375, 161,104.1,1]},{'fr100':[-1, 0, 0, 1, 11,105.1,0]},{'fr150':[-1, 0, 0, 1, 11,105.1,0]}],150);
    	yun2 = $("#yun2").zdw_init([{'fr1':[ -1, 0, 0, 1, 70.95,96,0]},{'fr45':[-1, 0, 0, 1, 70.95,96,0]},{'fr50':[-1, 0, 0, 1, 64.65,96,1]},{'fr100':[-1, 0, 0, 1, 11,105.1,0]},{'fr150':[-1, 0, 0, 1, 11,105.1,0]}],150);
    	yun3 = $("#yun3").zdw_init([{'fr1':[1, 0, 0, 1, 240.95,46,0]},{'fr45':[ 1, 0, 0, 1, 240.95,46,0]},{'fr50':[1, 0, 0, 1, 237.15,46,1]},{'fr100':[1, 0, 0, 1, 210.95,46,1]},{'fr101':[0.996002197265625, 0, 0, 0.996002197265625, 207.85,46,1]},{'fr145':[0.79998779296875, 0, 0, 0.79998779296875, 57,46,0]}],150);
    	yun4 = $("#yun4").zdw_init([{'fr1':[-1.02276611328125, 0, 0, 1.02276611328125, 97.35,20.45,0]},{'fr45':[-1.02276611328125, 0, 0, 1.02276611328125, 97.35,20.45,0]},{'fr50':[-1.02276611328125, 0, 0, 1.02276611328125, 97.35,20.45,1]},{'fr100':[ -1.02276611328125, 0, 0, 1.02276611328125, 37.35,20.45,0]},{'fr150':[ -1.02276611328125, 0, 0, 1.02276611328125, 37.35,20.45,0]}],150);
    }
    
    
    
    function setClude(_pos){
    	var pos = Math.floor(_pos*150);
    	yun1.gotoAndStop(pos);
    	yun2.gotoAndStop(pos);
    	yun3.gotoAndStop(pos);
    	yun4.gotoAndStop(pos)
    }
    
    
    //设置叶子stop帧
    function setYzstop(_pos){
    	var pos = Math.floor(_pos*150);
    	for(var i = 0;i<treeArray.length;i++){
    		treeArray[i].gotoAndStop(pos)
    	}
    	startmask.gotoAndStop(pos);
//    	yuncloud.gotoFrame(pos+3)
    }
//  
    
    
    function addDragEvent(){
    	$("#anniu").zdw_addEvent("mousedown",function(e){
    		//mouseY = e.zdwY;
    		isDown = true;
    		//snd2.play();
    		//console.log("aaaa")
    	});
    	
    	$(window).zdw_addEvent("mousemove",function(e){
    		if(isDown){
    			mouseoldY = e.zdwY
    			mouseY = Math.min(Math.max((mouseoldY-pianyiY),7),216);
    			
//  			var tempnum=0;
//  			if(mouseoldY>7){	tempnum=mouseoldY }else{tempnum=7}
//  			if(tempnum<216){mouseY=tempnum }else{ mouseY=216}
//  		
    			posbili = (mouseY-7)/216;
    			upEnterFrame()
    			play(posbili)
      		}
    	});
    	
    	$(window).zdw_addEvent("mouseup",function(e){
    		isDown = false;
    	});
//  	
//  	
    	$("#bt").zdw_addEvent("mouseup",function(){
    		mouseY = 7
    		posbili = 0.01
    		play(0.01);
    		//snd1.play()
    	})
    	
    	$("#bm1").zdw_addEvent("mouseup",function(){
    		mouseY = 85
    		posbili = 0.36
    		play(posbili)
    		//snd1.play()
    	})
    	
    	
    	$("#bm2").zdw_addEvent("mouseup",function(){
    		mouseY = 155
    		posbili = 0.68
    		play(posbili)
    	//	snd1.play()
    	})
    	
    	$("#bb").zdw_addEvent("mouseup",function(){
    		mouseY = 216
    		posbili = 0.96
    		play(posbili)
    	//	snd1.play()
    	})
//  	
//  	
    	$("#resetBtn").zdw_addEvent("mouseup",function(){
    		resetFn();
    	})
    	
    }
    
    
//  //选择小树并进行黑色变化
//  
    function settreeColor(pos){
    	var shuzi = (pos*(1.2-0.6)+0.6);
    	$("#fR").attr({"slope":shuzi});
    	$("#fG").attr({"slope":shuzi})
    	$("#fB").attr({"slope":shuzi})
    }
    
    
    //控制背景颜色变化
    function ControlcolorBg(pos){
    	col1.gotoAndStop(Math.ceil(pos*150))
		col2.gotoAndStop(Math.ceil(pos*150))
    }
    
    
    //地面亮度变化
    function DiMianLight(pos){
//  	LightF = dimianSnapDom.paper.filter(Snap.filter.brightness(pos));
//  	dimianSnapDom.attr({
//  		 filter: LightF
//  	})
		$("#dimianyinying").css({"opacity":(1-pos)})
    }
//  
//  
//  
    
    
    function upEnterFrame(){
    	
    	col1.updataAnimation()
		col2.updataAnimation()
    	yz1.updataAnimation()
    	yz2.updataAnimation()
    	yz3.updataAnimation()
    	yz4.updataAnimation()
    	yz5.updataAnimation()
    	yz6.updataAnimation()
    	yz7.updataAnimation()
    	yz8.updataAnimation()
    	yz9.updataAnimation()
    	startmask.updataAnimation();
      	yun1.updataAnimation()
      	if(isDown){
      		play(posbili)
    	}
    	
    	
//  	tweenID = setTimeout(function(){
//			requestID = requestAnimationFrame(upEnterFrame)
//		},1000/FPS);
    }
//  
    
    function play(pos){
      	setYzstop(pos)
      	ControlcolorBg(pos)
      	DiMianLight(pos)
        settreeColor(pos)
        setClude(pos)
        $("#anniu").attr({"transform":"matrix(0, 1, -1, 0, "+pianyiX+","+mouseY+")"});
//      anniu.setAttribute("transform","matrix(0, 1, -1, 0, "+pianyiX+","+mouseY+")")
//    	$("#anniu").css({"transform":"translate("+pianyiX+"px,"+mouseoldY+"px)"}); 
      //	console.log(pos,mouseY)
    }
    
    
    
    
    //复位命令
    function resetFn(){
    	mouseY = 0;
    	isDown = false;
    	mouseY = 7
    	posbili = 0.01
    	play(posbili)
    }

    p.reset = function () {
       
    };

    p.loadState = function (obj) {

    };

    p.saveState = function () {
        return {};
    };

    wnd.InteractiveActivity = InteractiveActivity;

})(window);