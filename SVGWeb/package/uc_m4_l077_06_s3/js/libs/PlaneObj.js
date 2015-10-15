
//这里是创建面对象

(function(win){
	var zdw_createPlane = function(arr){
		var rectMesh
		
		var rectShape = new THREE.Shape();	
		for(var i = 0;i<arr[0].length;i++){
			if(i==0){
				rectShape.moveTo(arr[0][i][0],arr[0][i][1]);
			}else{
				rectShape.lineTo(arr[0][i][0],arr[0][i][1]);
			}
		}
		//console.log(arr)
		var meshMa = 
				new THREE.MeshBasicMaterial( { color:arr[4],side: THREE.DoubleSide ,wireframe:false,transparent: true, overdraw:true,wireframeLinewidth :1} );
		
		
		meshMa.transparent = true
		
		
		var rectGeom = new THREE.ShapeGeometry( rectShape );
		rectGeom.curveSegments  = 100
		rectMesh = new THREE.Mesh( rectGeom, meshMa) ;	
		
		rectMesh.rotation.x = Math.PI/180*arr[5]
		rectMesh.rotation.y = Math.PI/180*arr[6]
		rectMesh.rotation.z = Math.PI/180*arr[7]
		rectMesh.position.x = arr[1]
		rectMesh.position.y = arr[2]
		rectMesh.position.z =arr[3]
		meshMa.setValues({"opacity":arr[8]})
		
		rectMesh.setopacity = function(opac){
			meshMa.setValues({"opacity":opac})
		}
		
		
		return rectMesh;
		
	}
	
	
	
	win.zdw_createPlane = zdw_createPlane;
	
})(window)
