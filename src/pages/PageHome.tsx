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
        cube.position.x += 0.1;
        // cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.rotation.z += 0.01;

        renderer.render(scene, camera);
      }
      animate();
    }
    renderBox();

    const renderSphere = () => {
      const radius = 20;  // ui: radius
      const widthSegments = 12;  // ui: widthSegments
      const heightSegments = 8;  // ui: heightSegments

      const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
      const material = new THREE.MeshLambertMaterial();

      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.x = 0;
      scene.add(sphere);

      function animate() {
        requestAnimationFrame(animate);

        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
        sphere.rotation.z += 0.01;

        renderer.render(scene, camera);
      }
      animate();

    }
    renderSphere();

  }, [])

  return <main className="home">
    <h1>three.js reference</h1>
    <div ref={divRef} className="canvas-container" />
  </main>
}

export default Home;