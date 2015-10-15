/**
 *这里是我定义的工具方法 
 * LoadPic(url,arr,CallBack)加载图片并添加到arr数组中
 */

var ZDWTool = {
	LoadPic:function(url,arr,CallBack){
		var img = new Image();
		img.src = "img/"+url+".png";
		img.onload = function(){
			arr.push(img);
			CallBack();
		};
		img.onerror = function(){
			throw "资源"+url+"不存在"
		}
	},
	Log:function(){
		console.log(arguments)
	},

}
