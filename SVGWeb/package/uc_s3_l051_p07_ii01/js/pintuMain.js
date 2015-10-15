//这里是所有变量的修改地址

/*
 * 其他需要修改的文件包括  
 * interactive-activity.js(4处)
 * persentation-template.js(2处)
 * css/style.css(1处)
 * index.html(1处)
 */


(function(win){
	//这里是课程的名字
	var pintuname = "pt2";//与interactive-activity中的xiugaimingzi名字一致
	//这里关于拼图游戏的游戏配置信息
	var pintuinfo = {
		picCroNum:3,//横向图片数量
		picLonNum:4,//纵向图片的数量
		picWidth:110,//图片宽度
		picHeight:75,//图片高度
		picadd:["img/_01.jpg","img/_02.jpg","img/_03.jpg","img/_04.jpg","img/_05.jpg","img/_06.jpg","img/_07.jpg","img/_08.jpg","img/_09.jpg","img/_10.jpg","img/_11.jpg","img/_12.jpg"],
		//这个是图片的路径地址
		answer:"img/answer.jpg",
		soundAllOK:"sounds/allok.mp3",//这里是全部正确后播放的声音
		soundOK:"sounds/ok.mp3",//这里是正确播放的声音
		soundWrong:"sounds/wrong.mp3",//这里是错误后播放的声音
		soundPress:"sounds/presswav.mp3"//鼠标按下声音
	}

	
	win[pintuname] = pintuinfo;
})(window)
