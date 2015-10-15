(function(win) {
	
	

	//初始化接口
	var InteractiveActivity = function(_api) {
		api = _api;
		init();
	}


	var txt = ["Water-efficient systems and <br> local treatment of waste.",
	"Tightly fitting, double-glazed <br>  windows reduce heat loss.",
	"Rainwater is collected <br> and stored for toilet flushing.",
	"Extra insulation in roof and  wall <br>  cavities reduces heat loss.",
	"Low-energy light fittings.",
	"Use of local recycled <br> building materials.",
	"Solar panels produce electricity <br>  for use in heating and lighting.",
	"Efficient heating system.",
	"Low-energy appliances.",
	"Alternative sources of heat.",
	"Waste segregation and recycling."]

	var curid = 0;
	var oldid = 0;
	var animationzhutiArr = new Array();
	var curselectedArr = new Array();
	var imgArr = new Array();




	var trash1 = document.getElementById("filter1");
	var trash1animations = trash1.getElementsByTagName("animate")

	var trash2 = document.getElementById("filter2");
	var trash2animations = trash2.getElementsByTagName("animate")
	
	
	var trash3 = document.getElementById("filter3");
	var trash3animations = trash3.getElementsByTagName("animate")
	
	
	var trash4 = document.getElementById("filter4");
	var trash4animations = trash4.getElementsByTagName("animate")
	
	
	var trash5 = document.getElementById("filter5");
	var trash5animations = trash5.getElementsByTagName("animate")
	
	
	var trash6 = document.getElementById("filter6");
	var trash6animations = trash6.getElementsByTagName("animate")
	
	
	var trash7 = document.getElementById("filter7");
	var trash7animations = trash7.getElementsByTagName("animate")
	
	
	var trash8 = document.getElementById("filter8");
	var trash8animations = trash8.getElementsByTagName("animate")
	
	
	var trash9 = document.getElementById("filter9");
	var trash9animations = trash9.getElementsByTagName("animate")
	
	
	var trash10 = document.getElementById("filter10");
	var trash10animations = trash10.getElementsByTagName("animate")
	
	
	var trash11 = document.getElementById("filter11");
	var trash11animations = trash11.getElementsByTagName("animate")

	animationzhutiArr.push(trash1animations);
	animationzhutiArr.push(trash2animations);
	animationzhutiArr.push(trash3animations);
	animationzhutiArr.push(trash4animations);
	animationzhutiArr.push(trash5animations);
	animationzhutiArr.push(trash6animations);
	animationzhutiArr.push(trash7animations);
	animationzhutiArr.push(trash8animations);
	animationzhutiArr.push(trash9animations);
	animationzhutiArr.push(trash10animations);
	animationzhutiArr.push(trash11animations);

	


	var p = InteractiveActivity.prototype; //创建接口原型
	var addpic
	//初始化
	function init() {
		addpic = document.getElementById("uc_s3_l051_p07_ii01_pic");
		addEvent();
		
		loadPic();
	}
	//LoadPic()
	function loadPic(){
		for(var i = 1;i<12;i++){
			addImage("img/"+i+".jpg");
		}
	}
	
	
	//addImage
	function addImage(url){
		var img = new Image();
		img.src = url;
		imgArr.push(img);
	}


	function addEvent(){
		for(var i = 1;i<=11;i++){
			$("#trash"+i).zdw_addEvent("mouseup",function(e){
				//alert(e.currentTarget.id);
				var nameid = parseInt(e.currentTarget.id.substr(5));
			//	stopAnimation();
				oldid = curid;
				curid = nameid;
				
				$(addpic).css({"opacity":0});
				
				
				addpic.innerHTML = "";
				
				
				
				if(oldid!=0){
					stopAnimation(oldid)
				}
				if(oldid != curid){
					playAnimation(nameid);
					console.log(nameid)
					
					addpic.appendChild(imgArr[nameid-1]);
					var div = document.createElement("div");
					$(div).attr("class","divtxt").html(txt[nameid-1]);
					addpic.appendChild(div);
					console.log($(div).css("width"))
					$(div).css("left",((244-$(div).width())/2-5)+"px");
					
					$(addpic).css({"opacity":1});
					console.log($(div).css("width"))
				}else{
					oldid = 0;
					curid = 0;
				}
				
				if(curselectedArr.indexOf(nameid)==-1){
					curselectedArr.push(nameid);
					$("#yuan"+curselectedArr.length).attr("fill","#A6FFFF")
				}
				
				
				
			})
		}
		
		
		$(addpic).zdw_addEvent("mouseup",function(){
	
			if($(addpic).css("opacity")!=0){
				$(addpic).css({"opacity":0});
				addpic.innerHTML = "";
				stopAnimation(curid);
//				oldid = 0;
//				curid = 0;
			}
		})
		
		
		
		
		
	}


	function stopAnimation(id){
		var curan = animationzhutiArr[id-1];
			for(var a = 0;a<curan.length;a++){
				curan[a].endElement()
		}
	}

	function playAnimation(id){
		var curan = animationzhutiArr[id-1];
			for(var a = 0;a<curan.length;a++){
				curan[a].beginElement()
		}
	}

	


	p.showAnswer = function() {
		
	}

	p.hideAnswer = function() {
		
	}

	p.lock = function(_bool) {
		lock = _bool
	}

	p.reset = function() {
		
	}


	p.loadState = function(obj) {
		
	}

	p.saveState = function() {
		stateObject = {
			
		}
		return stateObject;
	}



	function fireChangeEvent(){
		var status = {
			done:_done,
			errors:_errors
		};
		api.onResultChange(status);
	}


	p.markAnswer = function(bool) {
		
	}
	p.hidemarkAnswer = function(bool) {
		
	}

	


	win.InteractiveActivity = InteractiveActivity;

})(window)