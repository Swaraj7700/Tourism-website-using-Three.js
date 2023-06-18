
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Points, BufferGeometry, Float32BufferAttribute, PointsMaterial } from 'three';





//AYODHYA TEMPLE
const AyodhyatempleUrl = new URL('/assests/ayodhya.glb', import.meta.url);





const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60,
window.innerWidth / window.innerHeight, 0.1, 1000);
const orbit = new OrbitControls(camera, renderer.domElement);
camera.position.set(-100, 60, 230);
orbit.update();


// Addding stars to background


// const starGeometry = new THREE.BufferGeometry()
// const starMaterial = new THREE.PointsMaterial({
//   color: 0xffffff
// })

// const starVertices = []
// for (let i = 0; i < 10000; i++) {
//   const x = (Math.random() - 0.5) * 30000
//   const y = (Math.random() - 0.5) * 30000
//   const z = (Math.random() - 0.5) * 30000
//   starVertices.push(x, y, z)
// }

// starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3))

// const stars = new THREE.Points(
//   starGeometry, starMaterial)

// scene.add(stars)


// change background color

 renderer.setClearColor(0x050A30); 
// const textureLoader = new THREE.TextureLoader();
// scene.background = textureLoader.load(img);








const ambientLight = new THREE.AmbientLight(0xB45F06);//The AmbientLight class represents a light source that illuminates all objects in the scene equally, without any directionality or shadowing.
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xB45F06, 4);
scene.add(directionalLight);

const dLightHelper = new THREE.DirectionalLightHelper(directionalLight);
scene.add(dLightHelper);







//AYODHYA TEMPLE

const assestLoader = new GLTFLoader();
assestLoader.load(AyodhyatempleUrl.href, function (gltf) {
  const model = gltf.scene;
  scene.add(model);
  model.position.set(-12, 4, 10);
}, undefined, function (error) {
  console.error(error);
});







function animate() { 
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);