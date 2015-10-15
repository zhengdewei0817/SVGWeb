/**
 *这里是我的配置文件
 * 也是我挑出的比较有代表性的Demo
 * 我很努力，希望您能看到
 */

(function(win){
	win.zdw_config = {
		page:[
			{
				name:"天气变化",
				url:"/uc_b4_l063_02_a01s/",
				info:"这个课件的实现方式，通过Flash完成UI的制作，然后倒出SVG Image。 <br/>  通过Ajax方式加载,把svg加载到Dom中。然后通过JS进行控制。 <br/> 动画的实现方式:获取每个关键帧的矩阵数据，通过计算矩阵的差值以及帧数，计算每帧的矩阵数据。通过RequestAnimationFrame进行刷帧处理。<br/> 确定鼠标坐标，滑块制作鼠标跟随事件，确定滑块比例，确定播放动画当前帧。<br/>   <a href='https://github.com/zhengdewei0817/SVGAnimation' target='_blank'>动画插件的使用说明</a> <br/> <a href='https://github.com/zhengdewei0817/browerormobel' target='_blank'>兼容PC以及移动端插件使用说明</a>"
			},
			{
				name:"室内解析",
				url:"/uc_s3_l051_p07_ii01/",
				info:"这个课件的实现方式：同样素材来源于Flash导出，不同的地方是 课件采用了大量的SVG Animation标签以此减少JS代码量。<br/>  SVG作为代码直接嵌入Html中，并制作非动画部分为Img的BackGround。<a href='https://github.com/zhengdewei0817/SVGAnimation' target='_blank'>动画插件的使用说明</a> <br/> <a href='https://github.com/zhengdewei0817/browerormobel' target='_blank'>兼容PC以及移动端插件使用说明</a>"
			},
			{
				name:"数学解析式",
				url:"/uc_m5_l025a_03_s1/",
				info:"这个项目的实现方式：所有素材是纯JS代码生成，没有使用类似于Flash或者AI的工具。<br/> 所有的元素都可以通过配置列表生成，包括公式以及所有能看到的一切。<br/> 唯一的遗憾是没有做成可视化界面。<br/>功能上已经完全实现了百度搜索界面中输入公式出现的可视化效果。<br/><a href='https://github.com/zhengdewei0817/MathLine' target='_blank'>项目源代码地址</a><br/><a href='https://github.com/zhengdewei0817/SVGAnimation' target='_blank'>动画插件的使用说明</a> <br/> <a href='https://github.com/zhengdewei0817/browerormobel' target='_blank'>兼容PC以及移动端插件使用说明</a>"
			},
			{
				name:"3D模型",
				url:"/uc_m4_l077_06_s3/",
				info:"这个项目的实现方式: 此项目同样采用配置列表作为数据源的逻辑，配合Three.js的方式制作。<br/> 配置列表的内容包括立体线（圆柱）、不规则面、伪3D文字、角度符号。支持调整透明度。<br/> 有待改善：控制空间模型旋转，可采用双层嵌套，分别控制轴的方式增加控制便捷度。破面问题有待解决<br/><a href='https://github.com/zhengdewei0817/3D-Three-SVG' target='_blank'>项目源代码</a><br/><a href='https://github.com/zhengdewei0817/SVGAnimation' target='_blank'>动画插件的使用说明</a> <br/> <a href='https://github.com/zhengdewei0817/browerormobel' target='_blank'>兼容PC以及移动端插件使用说明</a>"
			},
		],
		//"|"换行符
		txtInfo:{
			1:"＊＊＊＊＊＊＊＊2011年，刚刚毕业的我，独自拖着行李,|踏上了去往北京的火车。。。为了我的理想，奋斗。",
			6:"带着我的目标，开始了我北京的生活。开始了我为期半年的求学之路。",
			12:"那时的目标是学习AS3.0，报名了一个培训班，| 从最基础的开始学，在天通苑租下了一间400元的小黑屋，| 所以的时间都用来写代码。练习，练习，再练习。| 终于有所顿悟。|相比之下，最擅长AS3.0 。| 当然，我的第一份工作也是在不断的学习与练习中度过的。",
			20:"第一份工作从事的是展览展示行业，涉及范围比较广泛。| 包括AS3 交互类应用的制作、Kinect开发、AR开发、Unity开发。|以及其他客户的定制需求。| 工作的任务当然也包括现场的项目管理与项目对接。",
			27:"2013年，公司解散，我也结束了我的第一份工作，开始了全新的生活。",
			32:"第二份工作，我来到了首享科技大厦，开始了我在暴风影音的程序员生活。",
			34:"在暴风的时间中，参与了暴风看电影项目，负责软件的微视频播放器部分。",
			36:"在暴风工作半年之后，我决定尝试一下我一直想做的管理岗位，|所以在作出极大牺牲的前提下，我选择了离开暴风。",
			38:"2014年，我进入了水晶石，行外可能不太了解，|作为一家中国最大的视觉设计公司，|能成为其中一员，还是一件光荣的事情。",
			42:"我如愿的进入了水晶石的商业展示部的项目经理组，在这里，失去的很多，收获的也很多。|一个代码以外的全新的世界进入了我的眼睛。",
			45:"由于某些特殊原因，经过深思熟虑，|最终我还是选择离开了水晶石，重新返回了我代码这条路。",
			47:"走了一圈的我，深深明白自己需要什么，卧薪尝胆，厚积薄发。",
			50:"我开始不断提升自己Web方面的能力，| 自学原生JS 学习基础、了解原理、| 一年间利用空余时间练习，学习。| 工作中不断尝试新方法、新技术。| 上天给我重新的机会，我怎敢浪费。",
			55:"现在我想说，我在努力，我一直都会努力。我希望能够加入你们。谢谢！！！",
		}
	}
})(window)
