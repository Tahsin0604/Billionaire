import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { status, error } = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen">
      <div className="text-center mt-2">
        <h2 className="font-extrabold  text-9xl text-red-400 ">
          <span className="sr-only">Error</span>
          {status || 404}
        </h2>
        <p className="font-semibold  text-2xl md:text-3xl text-slate-700 mt-9 mb-12">
          {error?.message}
        </p>
        <Link
          to="/"
          className="bg-red-400 hover:bg-red-500 duration-150 ease-in-out transition text-white text-sm font-bold px-3 py-1 rounded-md shadow-md"
        >
          Back to HomePage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
