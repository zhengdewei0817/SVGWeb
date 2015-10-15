/**
 * 这里是创建svg文本对象的类
 */


(function(win){
	
	var zdw_createTxt = function(arr){
		
		var txt = document.createElementNS( 'http://www.w3.org/2000/svg', 'text');
		var txtinfo = arr[0];
		var _tag = document.createElementNS("http://www.w3.org/2000/svg","tspan");
		//txt.appendChild(_tag)
		if(txtinfo.indexOf("||")!=-1){
			txtinfo = txtinfo.substr(txtinfo.indexOf("||")+2);
			txt.setAttribute("style","font-style: italic;font-family: arial;");
		}else{
			txt.setAttribute("style","font-family: arial;");
		}
		//_tag.textContent = txtinfo;
		txt.textContent = txtinfo;
		//alert(txtinfo)
		txt.setAttribute("fill",arr[2]);
		txt.setAttribute("font-size",arr[1]);
		txt.setAttribute("x",0);
		txt.setAttribute("y",0);
		txt.setAttribute("transform","matrix( 1, 0, 0, 1,"+0+","+0+")");
	
		var object = new THREE.SVGObject(txt);

		object.position.x = arr[3];
		object.position.y = arr[4];
		object.position.z = arr[5];
	
		
		return object
		
		
		
	}
	
	
	win.zdw_createTxt = zdw_createTxt;
	
	
	
})(window)
