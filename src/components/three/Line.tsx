import { useRef } from 'react';
import * as THREE from 'three';

const ThreeLine = () => {
  const eleDivRef = useRef<HTMLDivElement>(null);

  const renderLine = () => {
    const points = [];
    points.push(new THREE.Vector3(- 10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

    const line = new THREE.Line(geometry, material);
    // scene.add(line);
  };
  return <div ref={eleDivRef}>

  </div>
}
