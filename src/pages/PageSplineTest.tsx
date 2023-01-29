import React, { Suspense } from 'react';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const PageSpline = () => {
  return <div className="spline-test">
    <h1>spline test page</h1>
    <Suspense fallback={<div>loading</div>}>
      <Spline
        className='spline-text-canvas'
        scene="https://prod.spline.design/9aVE6044Rb1IFB1V/scene.splinecode"
        onKeyUp={() => window.alert("onkeyup")}
        onMouseUp={() => window.alert("onMouseUp")}
      />
    </Suspense>
  </div>
}

export default PageSpline;