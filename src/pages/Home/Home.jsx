import { useContext, useEffect } from "react";
import UserCard from "../../components/UserCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersList } from "../../redux/features/users/userSlice";
import { FilterContext } from "../../context/Context";
import { Helmet } from "react-helmet-async";
import loader from "/loader.svg";

const Home = () => {
  const dispatch = useDispatch();
  const { usersList, usersLoading } = useSelector((state) => state.userSlice);
  const {
    filterState: { orderedBy, searchQuery },
  } = useContext(FilterContext);
  const FilterdUserList = () => {
    let filterdUsers = [...usersList];
    if (orderedBy) {
      filterdUsers = filterdUsers.sort((a, b) =>
        orderedBy === "lowToHigh" ? a.rank - b.rank : b.rank - a.rank
      );
    }
    if (searchQuery) {
      filterdUsers = filterdUsers.filter((p) =>
        p.personName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filterdUsers;
  };
  useEffect(() => {
    dispatch(fetchUsersList());
  }, []);
  return (
    <div className="w-full">
      <Helmet>
        <title>Billionaire Profile | Home</title>
      </Helmet>
      <div className="py-10 px-4 md:px-8 lg:px-36 flex justify-center w-full">
        {usersLoading && <img src={loader} alt="" />}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-10 px-4 md:px-10 ">
        {FilterdUserList().map((user) => (
          <UserCard key={user.naturalId} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Home;
