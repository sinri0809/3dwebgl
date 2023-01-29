import { Routes, Route, Navigate } from 'react-router-dom';

import Home from 'pages/PageHome';
import Board from 'pages/PageBoard';
import PageSpline from 'pages/PageSplineTest';
import PageThree from 'pages/PageThree';

import BoardContent from 'components/layout/BoardContent';

import links from './links';

const Router = () => {
  return <Routes>
    <Route path={links.home} element={<Home />} />
    <Route path={links.spline} element={<PageSpline />} />
    <Route path={links.three} element={<PageThree />} />
    <Route path={links.board} element={<Board />}>
      <Route path=":id" element={<BoardContent />} />
    </Route>
    <Route path='*' element={<Navigate replace to={links.home} />} />
  </Routes>
}

export default Router;