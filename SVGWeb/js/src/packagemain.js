(function(win){
	//当前页
	var  curpage = 1;
	//获取iframe
	var iframeDiv = document.getElementById("iframe");
	// 获取Title
	var titleDiv = document.getElementById("title");
	//获取info
	var  infoDiv = document.getElementById("info");
	//获取Config
	var  config = win.zdw_config;
	//PageName;
	var PageName = "package"
	
	
	
	function LoadNextPage(){
		curpage+=1;
		if(curpage>config.page.length-1){
			curpage = 0;
		}
		LoadPageNum(curpage)
	}
	
	
	function LoadProPage(){
		curpage-=1;
		if(curpage<0){
			curpage = config.page.length-1;
		}
		LoadPageNum(curpage)
	}
	
	function LoadPageNum(num){
		var obj = config.page[num];
		iframeDiv.innerHTML = "";
		titleDiv.innerHTML = "";
		infoDiv.innerHTML = "";
		var inframeDom = document.createElement("iframe");
		iframeDiv.appendChild(inframeDom);
		inframeDom.setAttribute("width","100%");
		inframeDom.setAttribute("frameborder","no");
		inframeDom.setAttribute("src",PageName+obj.url+"index.html");
		
		titleDiv.innerHTML = obj.name;
		infoDiv.innerHTML = obj.info;
	}
//	LoadPageNum(curpage)
	
	
	var  ControlIframe = function(){
		LoadPageNum(curpage);
		$("#rightBtn").zdw_addEvent("mouseup",function(){
		LoadNextPage();
		$("#rightBtn").find(".rec").css("fill","rgba(200,200,200,0.8)");
		$("#rightBtn").find(".str").attr("stroke","rgb(29, 105, 202)");
	});
	$("#rightBtn").zdw_addEvent("mousedown",function(){
		$("#rightBtn").find(".rec").css("fill","rgb(29, 105, 202)");
		$("#rightBtn").find(".str").attr("stroke","rgba(200,200,200,0.8)");
	});
	$("#leftBtn").zdw_addEvent("mouseup",function(){
		LoadProPage();
		$("#leftBtn").find(".rec").css("fill","rgba(200,200,200,0.8)");
		$("#leftBtn").find(".str").attr("stroke","rgb(29, 105, 202)");
	});
	$("#leftBtn").zdw_addEvent("mousedown",function(){
		$("#leftBtn").find(".rec").css("fill","rgb(29, 105, 202)");
		$("#leftBtn").find(".str").attr("stroke","rgba(200,200,200,0.8)");
	});
	}
	
	
	
	
	
	
	win.zdw_ControlIframe = ControlIframe;
	
	
	
})(window)
