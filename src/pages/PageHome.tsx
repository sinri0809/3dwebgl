import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
import { width, height, scene, camera, renderer } from 'components/three/scene';

const Home = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    camera.position.set(0, 0, 100);
    if (divRef.current) {
      divRef.current.appendChild(renderer.domElement);
    }
    return () => {
    }
  }, []);

  useEffect(() => {
    // example) renderBox();
  }, [])

  return <main className="home">
    <h1>3D rendering references & test</h1>
    <p>It's home</p>
    <div ref={divRef} className="canvas-container" />
  </main>
}

export default Home;