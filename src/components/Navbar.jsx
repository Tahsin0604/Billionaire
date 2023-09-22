import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex sticky top-0 z-10 bg-white shadow-md justify-center py-4 border-b border-slate-200">
      <Link to="/">
        <h1 className="text-3xl font-bold text-slate-800 ">
          Billionaire Profile
        </h1>
      </Link>
    </div>
  );
};

export default Navbar;
