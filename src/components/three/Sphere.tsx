import { useRef } from 'react';
import * as THREE from 'three';

const ThreeSphere = () => {
  const eleDivRef = useRef<HTMLDivElement>(null);

  const renderSphere = () => {
    const radius = 20;  // ui: radius
    const widthSegments = 12;  // ui: widthSegments
    const heightSegments = 8;  // ui: heightSegments

    const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
    const material = new THREE.MeshLambertMaterial();

    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.x = 0;
    // scene.add(sphere);

    function animate() {
      requestAnimationFrame(animate);

      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      sphere.rotation.z += 0.01;

      // renderer.render(scene, camera);
    }
    animate();
  };
  return <div ref={eleDivRef}>

  </div>
}
