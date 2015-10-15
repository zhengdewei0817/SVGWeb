(function(win) {

	//初始化接口
	var InteractiveActivity = function(_api) {
		init(win)
		
	}
		$("#rightX").find(".btn1").css("display","none");
		$("#leftX").find(".btn1").css("display","none");
		$("#rightY").find(".btn1").css("display","none");
		$("#leftY").find(".btn1").css("display","none");
		$("#rightZ").find(".btn1").css("display","none");
		$("#leftZ").find(".btn1").css("display","none");

	var p = InteractiveActivity.prototype; //创建接口原型
	var opacityNum = 0.9;
	var speedopacity = 0.1
	
	var time
	var stageW = $(window).width();
	var stageH = $(window).height();
	
	var tweenID,requestID
	var FPS = 25;
	
	//初始化
	function init(win) {
		
		var config = win.zdwconfig;
		var camera, scene;  
		var renderer;
		
		var mesh, group;
		
		var isAn = false;
		
		var planarr = [];
		
		var playing = true;
		var setin,setid;
		camera = new THREE.PerspectiveCamera( 45, config.stageW/config.stageH, 1, 10000 );
		camera.position.z = 500;

		scene = new THREE.Scene();
		
		renderer = new THREE.SVGRenderer();
		renderer.setClearColor(config.bgcolor);
		renderer.setSize(config.stageW, config.stageH );
		renderer.setQuality( 'high' );
		$("#main").append( renderer.domElement );
		
		var sprite = new THREE.Sprite();
         scene.add( sprite );

		//---------------------------------创建边----------------------------------------------
		var lineArr = config.line;
		function createLine(){
			for(var i = 0;i<lineArr.length;i++){
				var line = zdw_createLine(lineArr[i]);
				sprite.add(line)
			}
		}
		
		createLine();
		
		//--------------------------------创建边线完毕----------------------------------------------
		
		


		//-------------------------------------创建面---------------------------------------------
		var planeArr = config.plane;
		
		function createPlane(){
			for(var i = 0;i<planeArr.length;i++){
				var rectMesh = zdw_createPlane(planeArr[i]);
				sprite.add(rectMesh);
				planarr.push(rectMesh)
			}
		}
		
		createPlane();
		
		
		function setopacityPlane(num){
			for(var i = 0;i<planarr.length;i++){
				planarr[i].setopacity(num)
			}
		}
		
		
		//--------------------------------创建面完毕------------------------------------------------
		
		
		
		
		
		
		
//		
//		$(window).zdw_addEvent("mousemove",function(e){
//			
//			sprite.rotation.y = Math.PI/180*(e.zdwX/stageW)*360
//			//sprite.rotation.x = Math.PI/180*(e.zdwY/stageH)*360
//			
//		})
//		
		

		
	
		
		
		

//		sprite.rotation.x = Math.PI/180*10
//		sprite.rotation.y = Math.PI/180*10
//		sprite.rotation.z = Math.PI/180*10


		//-------------------------------------创建文字------------------------------------------
		var txtarr =  config.txt;
		
		function createTxt(){
			for(var i = 0;i<txtarr.length;i++){
				var txt = zdw_createTxt(txtarr[i]);
				sprite.add(txt);
				
			}
		}
		
		createTxt()

		//-----------------------------------文字创建完毕-----------------------------------------
		
		
		
		//----------------------------------创建直角符号--------------------------------------
		var zhianlge = config.zhianlge;
		
		function createZhiAnlge(){
			for(var i = 0;i<zhianlge.length;i++){
				var zhijiao = zdw_createrect(zhianlge[i]);
				sprite.add(zhijiao)
			}
		}
		
		createZhiAnlge();
		
		
		//--------------------------------直角符号创建完毕------------------------------------
		
		//--------------------------------创建非直角符号 -------------------------------------
		
		var  feizhijiao = config.anlge;
		
		function createFeizhiAnlge(){
			for(var i = 0;i<feizhijiao.length;i++){
				var angle = zdw_createAnlge(feizhijiao[i])
				sprite.add(angle)
			}
		}
		
		createFeizhiAnlge();
		
		
		
		
		//-------------------------------创建非直角符号完毕------------------------------------
		
		
		

		function animate() {

		//	requestAnimationFrame( animate );

			if(playing){
				render();
				playing = false;
			}
			
			
			
			tweenID = setTimeout(function(){
				requestID = requestAnimationFrame(animate)
			},1000/FPS);
//			
			

		}
	
		function render() {
	
//				var time = Date.now() * 0.0002;
	
//				camera.position.x = Math.sin( time ) * 500;
//				camera.position.z = Math.cos( time ) * 500;
//				camera.position.y = Math.cos( time ) * 500;
//				
				camera.lookAt( scene.position );

				renderer.render( scene, camera );
	
		}
		
		animate();
		setid = 0
		setin = setInterval(function(){
			playing = true;
			setid+=1;
			if(setid>50){
				clearInterval(setin)
			}
			//console.log(setid)
		},40)
		
		
		
		//---------------------------------------------------操作DOM逻辑---------------------------------
		
		$("#rightX").zdw_addEvent("mousedown",function(e){
			$("#rightX").find(".btn2").css("display","none");
			$("#rightX").find(".btn1").css("display","block")
		})
		$("#leftX").zdw_addEvent("mousedown",function(e){
			$("#leftX").find(".btn2").css("display","none");
			$("#leftX").find(".btn1").css("display","block")
		})
		$("#rightX").zdw_addEvent("mouseup",function(e){
			$("#rightX").find(".btn1").css("display","none");
			$("#rightX").find(".btn2").css("display","block")
			playing = true;
			sprite.rotation.x = sprite.rotation.x+0.1
			
		})
		$("#leftX").zdw_addEvent("mouseup",function(e){
			$("#leftX").find(".btn1").css("display","none");
			$("#leftX").find(".btn2").css("display","block")
			playing = true;
			sprite.rotation.x = sprite.rotation.x-0.1
		})
		
		
		$("#rightY").zdw_addEvent("mousedown",function(e){
			$("#rightY").find(".btn2").css("display","none");
			$("#rightY").find(".btn1").css("display","block")
		})
		$("#leftY").zdw_addEvent("mousedown",function(e){
			$("#leftY").find(".btn2").css("display","none");
			$("#leftY").find(".btn1").css("display","block")
		})
		$("#rightY").zdw_addEvent("mouseup",function(e){
			$("#rightY").find(".btn1").css("display","none");
			$("#rightY").find(".btn2").css("display","block");
			playing = true;
			sprite.rotation.y = sprite.rotation.y+0.1
		})
		$("#leftY").zdw_addEvent("mouseup",function(e){
			$("#leftY").find(".btn1").css("display","none");
			$("#leftY").find(".btn2").css("display","block");
			playing = true;
			sprite.rotation.y = sprite.rotation.y-0.1
		})
		
		
		$("#rightZ").zdw_addEvent("mousedown",function(e){
			$("#rightZ").find(".btn2").css("display","none");
			$("#rightZ").find(".btn1").css("display","block")
		})
		$("#leftZ").zdw_addEvent("mousedown",function(e){
			$("#leftZ").find(".btn2").css("display","none");
			$("#leftZ").find(".btn1").css("display","block")
		})
		$("#rightZ").zdw_addEvent("mouseup",function(e){
			$("#rightZ").find(".btn1").css("display","none");
			$("#rightZ").find(".btn2").css("display","block");
			playing = true;
			sprite.rotation.z = sprite.rotation.z+0.1
		})
		$("#leftZ").zdw_addEvent("mouseup",function(e){
			$("#leftZ").find(".btn1").css("display","none");
			$("#leftZ").find(".btn2").css("display","block");
			playing = true;
			sprite.rotation.z = sprite.rotation.z-0.1
		})
		
		
		
		//这里是拖拽逻辑
		$("#dragK").zdw_addEvent("mousedown",function(e){
			isAn = true;
		})
		
		//-28   109
		$(window).zdw_addEvent("mousemove",function(e){
			if(isAn){
				var mouseX = e.zdwX-50-offsetLeft;
				mouseX = Math.max(Math.min(109,mouseX),-28)
				$("#dragK").attr("transform","matrix( 1, 0, 0, 1,"+(mouseX)+",-23)");
				
				playing = true;
				var pos = ((mouseX+28)/(109+28))
				setopacityPlane(pos);
				
			}
		})
		
		
		$(window).zdw_addEvent("mouseup",function(e){
			isAn = false;
		})
		
		
		
		
		
	}


	
		
	




	win.InteractiveActivity = InteractiveActivity;

})(window)