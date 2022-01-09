import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const group = new THREE.Group();
group.position.y = .5;
group.scale.y = 1.5;
group.rotation.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xFF0000 })
);
cube1.position.x = -2;
group.add(cube1);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0033cc })
);
cube3.position.x = 2;
group.add(cube3);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xFFFF00 })
);
group.add(cube2);

// Axes helper 
// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)