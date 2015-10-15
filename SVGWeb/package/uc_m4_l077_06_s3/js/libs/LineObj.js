/**
 * 这里是创建线条的逻辑
 */

(function(win){
	
	var zdw_createLine = function(arr){
		var geometry2 = new THREE.CylinderGeometry(arr[1],arr[1],arr[0]);
		var material2 = new THREE.MeshBasicMaterial( {color:arr[5]} );
		var cylinder2 = new THREE.Mesh( geometry2, material2 );
				
				cylinder2.rotation.x = Math.PI/180*arr[6]
				cylinder2.rotation.y = Math.PI/180*arr[7]
				cylinder2.rotation.z = Math.PI/180*arr[8]
				cylinder2.position.x = arr[2]
				cylinder2.position.y = arr[3]
				cylinder2.position.z = arr[4]
				
				
		return cylinder2
	}
	
	win.zdw_createLine = zdw_createLine;
	
	
})(window);

