$(function(){
	//设置背景
	
	
	var stageH = $(window).height();
	var stageW = $(window).width();
	onResize()
	
	$(window).on("resize",function(){
		onResize();
	})

	
	function onResize(){
		stageH = $(window).height();
		stageW = $(window).width();
//		$("#main").css("height",stageH+"px");
		$("#leftBtn").css("top",(stageH-80)/2+"px")
		$("#leftBtn").css("left",10+"px")
		$("#leftBtn").css("opacity",1);
		
		$("#rightBtn").css("top",(stageH-80)/2+"px")
		$("#rightBtn").css("left",(stageW-40-10)+"px")
		$("#rightBtn").css("opacity",1);

	}
	
	
	
	
	
	
})