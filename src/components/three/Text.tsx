import { useRef } from 'react';

const ThreeText = () => {
  const eleDivRef = useRef<HTMLDivElement>(null);

  const renderText = () => {
    const text = "Hello three.js";
    // const geometry = new THREE.TextGeometry( text, parameters );
  };

  return <div ref={eleDivRef}>

  </div>
}
