/**
 * 这里是创建直角方块的类
 *   ____kuan2M____
 *  |              |
 * 	|              |
 * gao1M          gao2M
 *  |              |
 *  |____kuan1M____|
 * 
 * 
 * 
 */

(function(win){
	
	var zdw_createrect = function(arr){
		
		var sprite = new THREE.Sprite();
		var material = new THREE.MeshBasicMaterial( {color:arr[3]} );
		
		//宽1
		var kuan = new THREE.CylinderGeometry(arr[2],arr[2],arr[0]);
		//高
		var gao = new THREE.CylinderGeometry(arr[2],arr[2],arr[1])
		
		
		
		var kuan1M = new THREE.Mesh(kuan,material);
		var kuan2M = new THREE.Mesh(kuan,material);
		var gao1M = new THREE.Mesh(gao,material);
		var gao2M = new THREE.Mesh(gao,material);
		
		
		sprite.add(kuan1M);
		sprite.add(kuan2M);
		sprite.add(gao1M);
		sprite.add(gao2M);
		
		
		gao1M.position.y = arr[1]/2;
		
		gao2M.position.y = arr[1]/2;
		gao2M.position.x = arr[0];
		
		kuan1M.rotation.z = Math.PI/180*90
		kuan1M.position.x = arr[0]/2
		
		kuan2M.rotation.z = Math.PI/180*90
		kuan2M.position.x = arr[0]/2
		kuan2M.position.y = arr[1]
		
		
		sprite.position.x = arr[4]
		sprite.position.y = arr[5]
		sprite.position.z = arr[6]
		
		sprite.rotation.x = Math.PI/180*arr[7]
		sprite.rotation.y = Math.PI/180*arr[8]
		sprite.rotation.z = Math.PI/180*arr[9]
		
		
		
		
		return sprite;
	}
	
	
	
	win.zdw_createrect = zdw_createrect;
	
})(window)

