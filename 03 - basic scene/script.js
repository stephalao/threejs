//scene 
const scene = new THREE.Scene();

// red cube 
// geometery creates the shape of the object 
const geometry = new THREE.BoxGeometry(1, 1, 1); 

// material is the outer shell of the geometry 
const material = new THREE.MeshBasicMaterial({ color: 'red' }); 

// mesh is the combo of the geometry and the material
const mesh = new THREE.Mesh(geometry, material); 

// this adds the mesh to the scene
scene.add(mesh); 

//size object allows you to handle size in diffenet liocations without rewritting it a bunch 
const sizes = {
  width: 800,
  height: 600,
}

// camera - Perspective Camera is one of the many tyes of cameras that can be added to the render your scene. The view of the scene is through the camera and it is never seen as paert of the scene
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// the location of the camera is moved along the z-aaxis which in three.js is the axis towards the user and away 
camera.position.z = 3;
scene.add(camera);

//renderer 
// use native js to select wehre we are going to render the CSS
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);