import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
//import img from '/assests/img.png';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';






//Char Minar
const charminarUrl = new URL('/assests/Puriodisa.glb', import.meta.url);





const renderer = new THREE.WebGL1Renderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);


const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(350, 250, 0);
orbit.update();
renderer.setClearColor(0x050A30);


// change background color

// renderer.setClearColor(0xFFEA00); 
// const textureLoader = new THREE.TextureLoader();
// scene.background = textureLoader.load(img);



// light 




const ambientLight = new THREE.AmbientLight(0xF7EB89);//The AmbientLight class represents a light source that illuminates all objects in the scene equally, without any directionality or shadowing.
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xF7EB89, 4);
scene.add(directionalLight);

const dLightHelper = new THREE.DirectionalLightHelper(directionalLight);
scene.add(dLightHelper);


// const ambientLight = new THREE.AmbientLight(0xFFFFFF);//The AmbientLight class represents a light source that illuminates all objects in the scene equally, without any directionality or shadowing.
// scene.add(ambientLight);

// const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
// scene.add(directionalLight);

// const dLightHelper = new THREE.DirectionalLightHelper(directionalLight);
// scene.add(dLightHelper);

// const spotlight = new THREE.SpotLight(0xFFFFFF);
// scene.add(spotlight);
// spotlight.position.set(-100,-100,0);
// spotlight.angle = 0.2;
// const sLightHelper = new THREE.SpotLightHelper(spotlight);
// scene.add(sLightHelper);





//Char Minar

const assestLoader = new GLTFLoader();
assestLoader.load(charminarUrl.href, function (gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-12, 4, 10);
}, undefined, function (error) {
  console.error(error);
});







function animate() {
  // box.rotation.x += 0.005;
  // box.rotation.y += 0.005;
  // monkey.rotation.x += 0.005
  // monkey.rotation.y += 0.005
  renderer.render(scene, camera);

}



renderer.setAnimationLoop(animate);