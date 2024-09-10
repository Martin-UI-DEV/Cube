import * as THREE from 'three';


const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 100);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material  = new THREE.MeshStandardMaterial({
    color: 0x00ff00
});

const hemiLights = new THREE.HemisphereLight(0xffffff, 0x666666);
hemiLights.position.set(0, 20, 0);
scene.add(hemiLights)
const cube = new THREE.Mesh(geometry, material);
cube.scale.setScalar(2)
scene.add(cube);
function animate () {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    renderer.render(scene, camera)
}
animate();
renderer.render(scene, camera);  

