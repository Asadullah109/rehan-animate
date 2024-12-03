import * as THREE from "three";
import "./index.css";

// Scene and Camera Setup
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near plane
  1000 // Far plane
);
camera.position.z = 30; // Positioning the camera

// Geometry, Material, and Mesh
const geometry = new THREE.CylinderGeometry(5, 5, 20, 32); // Cylinder
const material = new THREE.MeshBasicMaterial({ color: 'green', wireframe: true });
const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);

// Renderer Setup
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); // Append canvas to the body

// Animation Function
function animate() {
  requestAnimationFrame(animate);

  // Animation Logic
  cylinder.rotation.x += 0.01; // Rotate on X-axis
  cylinder.rotation.y += 0.01; // Rotate on Y-axis

  renderer.render(scene, camera);
}

// Resizing the Renderer on Window Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start Animation
animate();
