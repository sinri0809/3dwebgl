import { Link } from 'react-router-dom';

import links from "pages/links";

const Nav = () => {
  return <nav>
    <ul>
      <li><Link to={links.home}>home</Link></li>
      <li><Link to={links.board}>board</Link></li>
      <li><Link to={links.spline}>spline_test</Link></li>
      <li><Link to={links.three}>three_test</Link></li>
    </ul>
  </nav>
}

export default Nav;