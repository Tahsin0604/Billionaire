import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleUser } from "../../redux/features/users/userSlice";
import loader from "/loader.svg";
import { Helmet } from "react-helmet-async";
const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { singleUser, detailsLoading, isError } = useSelector(
    (state) => state.userSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("object");
    dispatch(fetchSingleUser(id));
  }, []);

  if (isError) {
    navigate("/error");
  }
  if (detailsLoading) {
    return (
      <div className="py-10 px-4 md:px-8 lg:px-36 flex justify-center w-full">
        <img src={loader} alt="" />
      </div>
    );
  }
  if (!detailsLoading) {
    return (
      <div className="py-10 px-4 md:px-8 lg:px-36 flex flex-col md:flex-row gap-6 w-full">
        {singleUser?.personName && (
          <Helmet>
            <title>Billionaire Profile | {singleUser?.personName}</title>
          </Helmet>
        )}
        <div className="flex justify-center">
          <div>
            <div className="p-4 rounded-md shadow-md w-fit">
              <img
                src={singleUser?.squareImage}
                alt={singleUser?.personName}
                className="h-64 rounded-md"
              />
              <div className="text-center mt-2">
                <h2 className="text-sm font-bold text-slate-700">
                  {singleUser?.personName}
                </h2>
                <h4 className="text-xs font-medium text-slate-500">
                  {singleUser?.email}
                </h4>
                <p className="mt-1 text-sm font-semibold text-slate-600">
                  <span>{singleUser?.city}</span>,{" "}
                  <span>{singleUser?.countryOfCitizenship}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="p-4 rounded-md shadow-md  divide-y">
            <div className="flex items-center pb-2">
              <h1 className="text-sm font-bold w-40">Full Name :</h1>
              <h1 className="text-sm font-semibold text-slate-500">
                {singleUser?.personName}
              </h1>
            </div>
            <div className="flex items-center py-2">
              <h1 className="text-sm font-bold w-40">Email :</h1>
              <h1 className="text-sm font-semibold text-slate-500">
                {singleUser?.email}
              </h1>
            </div>
            <div className="flex items-center py-2">
              <h1 className="text-sm font-bold w-40">Company Name :</h1>
              <h1 className="text-sm font-semibold text-slate-500">
                {singleUser?.source}
              </h1>
            </div>
            <div className="flex items-center py-2">
              <h1 className="text-sm font-bold w-40">Global Rank :</h1>
              <h1 className="text-sm font-semibold text-slate-500">
                {singleUser?.rank}
              </h1>
            </div>
            <div className="flex items-center py-2">
              <h1 className="text-sm font-bold w-40">City :</h1>
              <h1 className="text-sm font-semibold text-slate-500">
                {singleUser?.city}
              </h1>
            </div>
            <div className="flex items-center py-2">
              <h1 className="text-sm font-bold w-40">Country :</h1>
              <h1 className="text-sm font-semibold text-slate-500">
                {singleUser?.countryOfCitizenship}
              </h1>
            </div>
          </div>
          {singleUser?.abouts && (
            <div className="p-4 rounded-md shadow-md mt-6">
              <h1 className="text-sm font-bold mb-2">About:</h1>
              {singleUser?.abouts.map((about, index) => (
                <h1
                  key={index}
                  className="text-sm font-semibold text-slate-500 py-1"
                >
                  {about}
                </h1>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default Details;
