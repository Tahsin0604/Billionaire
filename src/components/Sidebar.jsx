import { useContext, useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FilterContext } from "../context/Context";
const Sidebar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const {
    filterState: { orderedBy },
    filterDispatch,
  } = useContext(FilterContext);
  const filterForUsers = (
    <>
      <h1 className="font-bold">Filter</h1>
      <div className="space-y-4 mt-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            className=" checked:bg-blue-500 bg-white"
            onChange={() => {
              filterDispatch({
                type: "SORT_BY_RANK",
                payload: "lowToHigh",
              });
            }}
            checked={orderedBy === "lowToHigh" ? true : false}
          />
          <span className="text-sm  text-slate-700  font-semibold">
            By Rank (Ascending)
          </span>
        </label>

        {/* Descending */}

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            className="radio-xs checked:bg-blue-500 bg-white"
            onChange={() => {
              filterDispatch({
                type: "SORT_BY_RANK",
                payload: "highToLow",
              });
            }}
            checked={orderedBy === "highToLow" ? true : false}
          />
          <span className="text-sm text-slate-700  font-semibold">
            By Rank (Descending)
          </span>
        </label>
        <div>
          <input
            type="text"
            placeholder="search"
            onChange={(e) => {
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
            }}
            className="px-2 py-1 border border-slate-500 text-sm text-slate-800  rounded-md outline-0 shadow-md w-full"
          />
        </div>
      </div>
    </>
  );
  return (
    <div className="relative">
      <button
        className="fixed md:hidden py-1 px-1 rounded-r-md border mt-2 shadow text-sky-300 bg-white z-10"
        onClick={() => setSideBarOpen(!sideBarOpen)}
      >
        <SlArrowRight />
      </button>
      <div className="sticky shadow top-[68px] h-[calc(100vh-68px)] border-r border-slate-200 hidden md:flex flex-col md:w-56 py-10 px-5 ">
        {filterForUsers}
      </div>
      <div
        className={`fixed inset-0 top-[68px] md:hidden duration-300 delay-200 z-20 transition ease-in-out ${
          sideBarOpen ? "translate-x-0" : "-translate-x-[50rem]"
        }`}
      >
        <div className="bg-slate-600 bg-opacity-20 h-[calc(100vh-68px)] ">
          <div
            className={`h-full w-3/4 bg-white relative duration-150 delay-150 transition ease-in-out px-4 py-10 ${
              sideBarOpen ? "translate-x-0" : "-translate-x-[32rem]"
            }`}
          >
            <button
              className="absolute top-[1px] right-0 py-1 px-1 rounded-l-md border mt-2 shadow text-sky-300"
              onClick={() => setSideBarOpen(!sideBarOpen)}
            >
              <SlArrowLeft />
            </button>
            {filterForUsers}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
