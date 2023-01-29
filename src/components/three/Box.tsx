import { useRef } from 'react';
import * as THREE from 'three';

const ThreeBox = () => {
  const eleDivRef = useRef<HTMLDivElement>(null);

  const renderBox = () => {
    const width = 40;
    const height = 40;
    const depth = 40;

    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = new THREE.MeshMatcapMaterial({ color: 0x000fff });

    // cube: Mesh
    const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // ? animate (recursion)
    function animate() {
      requestAnimationFrame(animate);
      cube.position.x += 0.1;
      // cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;

      // renderer.render(scene, camera);
    }
    animate();
  };
  return <div ref={eleDivRef}>

  </div>
}
