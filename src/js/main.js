import * as THREE from '../../node_modules/three-js/three.js' 

var scene = new THREE.Scene(); 
 
var camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 7; 

var cube;


function createPlane() {
    const plane = new THREE.Plane( new THREE.Vector3( 1, 1, 0.2 ), 3 );
    const helper = new THREE.PlaneHelper( plane, 1, 0xffff00 );
    scene.add( helper );
}

function createCube(){
    
    var geometry = new THREE.BoxGeometry(1,1,1);
            
    //var texture = new THREE.TextureLoader().load( 'textures/crate.gif' );
    //var material = new THREE.MeshBasicMaterial( { map: texture } );
    
    var material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
        
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
};


function animate() {
    requestAnimationFrame( animate );
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
}

//createPlane();
createCube(); 
animate();