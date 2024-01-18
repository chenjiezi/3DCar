// import three.js
import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
// ORBITCONTROLS allow for the camera to move
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
// GLTFLoader allow for import the .gltf file
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
// TWEEN allow to create animation in camera postion
import TWEEN from 'https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.5.0/dist/tween.esm.js';

let canvasform = document.getElementById("dCanvas");
let width = canvasform.offsetWidth;
let height = canvasform.offsetHeight;
// create a threeJS scene
let scene = new THREE.Scene();
// create camera
let camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
// keep the 3D Object
let object;
// OrbitControls allow to the camera move
let controls;
// instaniate a loader for the .gltf file
let loader = new GLTFLoader();
// load the file
loader.load('free_porsche_911_carrera_4s/scene.gltf', function (gltf) {
    // if file loaded add to scene
    object = gltf.scene;
    scene.add(object);
})
// allow background transparent with alpha = true
let renderer = new THREE.WebGLRenderer({
    alpha: true
});
renderer.setSize(width, height);
// Add the renderer to DOM HTML
canvasform.appendChild(renderer.domElement);
// set camera
camera.position.set(5, 0, 1); // x,y,z
// add light to the camera
let ambientLight = new THREE.AmbientLight(0x404040, 1);
scene.add(ambientLight);
let directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(0, 1, 0);
scene.add(directionalLight);
let light = new THREE.PointLight(0x4c4c4c, 10);
light.position.set(0, 300, 500);
scene.add(light);
let light2 = new THREE.PointLight(0x4c4c4c, 10);
light2.position.set(500, 100, 0);
scene.add(light2);
let light3 = new THREE.PointLight(0x4c4c4c, 10);
light3.position.set(0, 100, -500);
scene.add(light3);
let light4 = new THREE.PointLight(0x4c4c4c, 10);
light4.position.set(-500, 300, 500);
scene.add(light4);
// add controls to the camera
controls = new OrbitControls(camera, renderer.domElement)
// Render the scene
function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();
    renderer.render(scene, camera);
}
animate();
