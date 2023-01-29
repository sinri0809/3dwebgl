import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function SplineText() {

  // function onLoad(spline) {
  //   const obj = spline.findObjectByName('Cube');
  //   // or
  //   // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

  //   // save it in a ref for later use
  //   cube.current = obj;
  // }

  // function moveObj() {
  //   console.log(cube.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }

  //   // move the object in 3D space
  //   if (cube.current) {
  //     cube.current.position.x += 10;
  //   }
  // }

  return (<Suspense fallback={<div>loading</div>}>
    <Spline
      className='spline-text-canvas'
      scene="https://prod.spline.design/9aVE6044Rb1IFB1V/scene.splinecode"
      onKeyUp={() => window.alert("onkeyup")}
      onMouseUp={() => window.alert("onMouseUp")}
    />
  </Suspense>
  );
}