import LoggedIn from "./components/LoggedIn";
import NotLoggedIn from "./components/NotLoggedin";

const App = () => {
  let loggedIn = false;
  //   if (loggedIn) {
  //     return <LoggedIn />;
  //   } else {
  //     return <NotLoggedIn />;
  //   }
  //   return loggedIn ? <LoggedIn /> : <NotLoggedIn />;

  //   switch (loggedIn) {
  //     case true:
  //       return <LoggedIn />;
  //     case false:
  //       return <NotLoggedIn />;
  //   }

  return (
    <div>
      {/* {loggedIn && <LoggedIn />}
      {!loggedIn && <NotLoggedIn />} */}

      <LoggedIn />
    </div>
  );
};

export default App;
