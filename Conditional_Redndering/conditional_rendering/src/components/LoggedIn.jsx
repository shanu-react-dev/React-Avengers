import NotLoggedIn from "./NotLoggedin";

const LoggedIn = () => {
  let user = {
    details: {
      username: "Sundari",
      age: 21,
      address: {
        city: "Pune",
        Village: "XY",
        pin: 123456,
      },
    },
  };
  return (
    <div>
      <h1>Hey I have already logged in</h1>
      <NotLoggedIn userObj={user} />
    </div>
  );
};

export default LoggedIn;
