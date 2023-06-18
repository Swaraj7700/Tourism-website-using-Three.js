import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import img from '/assests/img.png';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


// here are various models 

// Jagannath Puri Model
//const puriUrl = new URL('/assests/puri', import.meta.url);

// India Gate
const delhiUrl = new URL('/assests/delhi', import.meta.url);

// Gateway Of India
//const gatewayUrl = new URL('/assests/gateway', import.meta.url);

//Qutub Minar
//const qutubminarUrl = new URL('/assests/qutubminar', import.meta.url);

//Char Minar
///const charminarUrl = new URL('/assests/charminar', import.meta.url);

//Jangira Fort
//const jangiraUrl = new URL('/assests/jangira', import.meta.url);



const renderer = new THREE.WebGL1Renderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);


const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(-10, 30, 30);
orbit.update();



// change background color

// renderer.setClearColor(0xFFEA00); 
// const textureLoader = new THREE.TextureLoader();
// scene.background = textureLoader.load(img);



// light 





const ambientLight = new THREE.AmbientLight(0xFFFFFF);//The AmbientLight class represents a light source that illuminates all objects in the scene equally, without any directionality or shadowing.
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
scene.add(directionalLight);

const dLightHelper = new THREE.DirectionalLightHelper(directionalLight);
scene.add(dLightHelper);

// const spotlight = new THREE.SpotLight(0xFFFFFF);
// scene.add(spotlight);
// spotlight.position.set(-100,-100,0);
// spotlight.angle = 0.2;
// const sLightHelper = new THREE.SpotLightHelper(spotlight);
// scene.add(sLightHelper);



// ADD GLTF module



// Jagannath Puri Model
// const assestLoader = new GLTFLoader();
// assestLoader.load(puriUrl.href, function (gltf) {
//   const model = gltf.scene;
//   scene.add(model);
//   model.position.set(-12, 4, 10);
// }, undefined, function (error) {
//   console.error(error);

// });

// India Gate

const assestLoader = new GLTFLoader();
assestLoader.load(delhiUrl.href, function (gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-12, 4, 10);
}, undefined, function (error) {
  console.error(error);
});


// Gateway Of India

// const assestLoader = new GLTFLoader();
// assestLoader.load(gatewayUrl.href, function (gltf) {
//   const model = gltf.scene;
//   scene.add(model);
//   model.position.set(-12, 4, 10);
// }, undefined, function (error) {
//   console.error(error);
// });

//Qutub Minar

// const assestLoader = new GLTFLoader();
// assestLoader.load(qutubminarUrl.href, function (gltf) {
//   const model = gltf.scene;
//   scene.add(model);
//   model.position.set(-12, 4, 10);
// }, undefined, function (error) {
//   console.error(error);
// });

//Char Minar

// const assestLoader = new GLTFLoader();
// assestLoader.load(charminarUrl.href, function (gltf) {
//   const model = gltf.scene;
//   scene.add(model);
//   model.position.set(-12, 4, 10);
// }, undefined, function (error) {
//   console.error(error);
// });


//Jangira Fort

// const assestLoader = new GLTFLoader();
// assestLoader.load(jangiraUrl.href, function (gltf) {
//   const model = gltf.scene;
//   scene.add(model);
//   model.position.set(-12, 4, 10);
// }, undefined, function (error) {
//   console.error(error);
// });




function animate() {
  // box.rotation.x += 0.005;
  // box.rotation.y += 0.005;
  // monkey.rotation.x += 0.005
  // monkey.rotation.y += 0.005
  renderer.render(scene, camera);

}



renderer.setAnimationLoop(animate);