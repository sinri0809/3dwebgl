import * as THREE from 'three';


const width = window.innerWidth;
const height = window.innerHeight;

export { width, height };

/**
 * basic setting 
 * * scene
 * * camera
 */
const scene = new THREE.Scene(); // or import { Scene } from 'three';
const camera = new THREE.PerspectiveCamera(
  45,
  width / height,
  1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

export { scene, camera, renderer };
/**
 * 
*/


