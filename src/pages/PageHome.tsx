import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
// import { Scene } from 'three';

const Home = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      1,
      1000
    );
    // camera position
    camera.position.set(0, 0, 100);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    divRef.current?.appendChild(renderer.domElement);

    // make fundamentals
    // Text
    const renderText = () => {
      const text = "Hello three.js";
      // const geometry = new THREE.TextGeometry( text, parameters );
    };

    // * Line 
    const renderLine = () => {
      const points = [];
      points.push(new THREE.Vector3(- 10, 0, 0));
      points.push(new THREE.Vector3(0, 10, 0));
      points.push(new THREE.Vector3(10, 0, 0));

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

      const line = new THREE.Line(geometry, material);
      scene.add(line);
    };

    // * Box
    const renderBox = () => {
      const width = 40;
      const height = 40;
      const depth = 40;

      const geometry = new THREE.BoxGeometry(width, height, depth);
      const material = new THREE.MeshMatcapMaterial({ color: 0x000fff });

      // cube: Mesh
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // ? animate (recursion)
      function animate() {
        requestAnimationFrame(animate);
        // cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.rotation.z += 0.01;

        renderer.render(scene, camera);
      }
      animate();
    }
    renderBox();

  }, [])

  return <main className="home">
    <h1>three.js reference</h1>
    <div ref={divRef} className="canvas-container" />
  </main>
}

export default Home;