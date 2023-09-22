const getUserDetails = async ({ params }) => {
  const res = await fetch("/profile.json");
  const list = await res.json();
  const details = list.find((user) => user.naturalId === params.id);
  return details;
};
export default getUserDetails;
