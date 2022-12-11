import { Routes, Route, Navigate } from 'react-router-dom';

import Home from 'pages/PageHome';
import Board from './PageBoard';
import BoardContent from 'components/layout/BoardContent';

import links from './links';

const Router = () => {
  return <Routes>
    <Route path={links.home} element={<Home />} />
    <Route path={links.board} element={<Board />}>
      <Route path=":id" element={<BoardContent />} />
    </Route>
    <Route path='*' element={<Navigate replace to={links.home} />} />
  </Routes>
}

export default Router;