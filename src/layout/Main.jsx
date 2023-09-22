import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Main = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div>
      <Navbar />
      <div className="flex w-full relative">
        {pathname === "/" && <Sidebar />}
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
