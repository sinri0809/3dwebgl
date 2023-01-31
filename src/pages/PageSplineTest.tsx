import React from 'react';
// import useSpline from '@splinetool/r3f-spline'

// import SplineReact from 'components/spline/SplineReact';
// import Scene from 'components/spline/SplineFiber';

const PageSpline = () => {
  // const { nodes, materials } = useSpline('https://prod.spline.design/9aVE6044Rb1IFB1V/scene.splinecode')

  return <div className="spline-test">
    <h1>spline test page</h1>
    {/* export as React */}
    {/* <SplineReact /> */}
    {/* export as react-three-fiber */}
    {/* 
      에러나서 못씀 https://developer.mozilla.org/ko/docs/WebAssembly/JavaScript_interface/instantiate
      <Scene nodes={nodes} materials={materials}/> 
    */}
  </div>
}

export default PageSpline;