import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/main_window">Home</Link>
          </li>

          <li>
            <Link to="lunar_phase">Lunar Phase</Link>
          </li>
          <li>
            <Link to="lunar_visibility">Lunar Visibility</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
