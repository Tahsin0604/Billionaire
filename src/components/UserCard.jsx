import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="flex flex-col rounded-md bg-slate-50 pb-4 shadow-md duration-200 delay-200 transition ease-in-out hover:-translate-y-1">
      <img
        src={user.squareImage}
        alt=""
        className="h-36 md:h-52 lg:h-56 rounded-t-md"
      />
      <div className="px-2 lg:px-4 my-3 space-y-1">
        <h1 className="text-xs md:text-sm font-bold text-slate-800">
          {user.personName}
        </h1>
        <p className="text-[9px]   font-semibold text-slate-500">
          {user.email}
        </p>
      </div>
      <div className="md:flex md:justify-end px-2 lg:px-4 mt-auto pt-2">
        <Link
          to={`/details/${user.naturalId}`}
          className="px-3 py-1 flex justify-center bg-sky-400 hover:bg-sky-500 shadow-lg hover:scale-105 transition duration-300 rounded-md text-white text-sm font-semibold hover:translate-y-1"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
