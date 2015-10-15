var cont, iframe, initW, initH, ratio, resizeFactor, offsetLeft, offsetTop,iframeLeft
var _done = 0;
var _errors = 0;

window.init = function (empiriaAPI) {


    var empiriaObject = {};

    var ia = new InteractiveActivity(empiriaAPI);
//
    cont = $('#container');
    
    iframe = _.find($("iframe" , parent.document),function(item){
    		return item.src.indexOf("uc_m4_l077_06_s3")!==-1;
    })
  
    
   	initW = parseInt($(cont).css('width'));

    initH = parseInt($(cont).css('height'));


    ratio = initH / initW;

    resizeFactor = 1;
    
      
      onResize();
    
    $(window).on("resize",function(){
    	 onResize();
    })
    
    $(window).on('unload', function () {
        $(window).off('resize');
    });
    
    
    
    empiriaObject.setStateOnExternal = function (status) {
    		//console.log(status)
    	//	alert("设置状态")
       // ia.loadState(status);
    };

    empiriaObject.getStateFromExternal = function () {
    		//var sss =  ia.saveState()
    		//alert("获取状态")
    		//console.log(sss)
        return {};
    };

    empiriaObject.reset = function () {
     //	ia.reset();
    };

    empiriaObject.lock = function () {

   	 //	ia.lock(true);
    };

    empiriaObject.unlock = function () {
   
   	 //	ia.lock(false);
    };
    
    
    empiriaObject.showCorrectAnswers = function(){
   	 	//alert("显示答案")
   	 //	ia.showAnswer();
    }
    empiriaObject.hideCorrectAnswers = function(){
    		//alert("隐藏答案")
    	//	ia.hideAnswer();
    }
    
    empiriaObject.markCorrectAnswers = function(){
    		//alert("显示标志正确答案")
    	//	ia.markAnswer();
    }
    empiriaObject.unmarkCorrectAnswers = function(){
    		//alert("隐藏标志正确答案")
    	//	ia.hidemarkAnswer();
    }
    
    empiriaObject.markWrongAnswers = function(){
    		//alert("显示标志错误答案")
    }
    empiriaObject.unmarkWrongAnswers = function(){
    		//alert("隐藏标志错误答案")
    }
    return empiriaObject;
};

function onResize() {
	var contWidth = $(cont).width();
    var contHeight = contWidth * ratio;
    $(cont).css({'height': contHeight + 'px'});
    $(iframe).css({'height': contHeight + 'px'});
    $(iframe).attr({"scrolling":"no"})
     $("iframe").attr({"scrolling":"no"})
    resizeFactor = contWidth / initW;
    offsetLeft = $(cont).offset().left + $(iframe).offset().left;
    offsetTop = $(cont).offset().top + $(iframe).offset().top;
     $(cont).css({'left': ($(iframe).width()-$(cont).width())/2+ 'px'});
     offsetLeft = ($(iframe).width()-$(cont).width())/2
    iframeLeft = $(cont).offset().left;
}




