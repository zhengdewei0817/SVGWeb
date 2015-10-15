/**
 * 
 * 这里是显示非直角的
 * 
 */

(function(win){
	
	var zdw_createAnlge = function(arr){
		var sprite = new THREE.Sprite();
		
		var geometry = new THREE.TorusGeometry(arr[1], arr[2], 8,6,Math.PI/180*arr[0]);
		var material = new THREE.MeshBasicMaterial( { color:arr[3]} );
		var torus = new THREE.Mesh( geometry, material );
		
		sprite.add( torus );
		
		sprite.position.x = arr[4];
		sprite.position.y = arr[5];
		sprite.position.z = arr[6];
		
		sprite.rotation.x = Math.PI/180*arr[7]
		sprite.rotation.y = Math.PI/180*arr[8]
		sprite.rotation.z = Math.PI/180*arr[9]
		
		
		return sprite;
	}
	
	
	win.zdw_createAnlge = zdw_createAnlge;
	
	
	
})(window);
