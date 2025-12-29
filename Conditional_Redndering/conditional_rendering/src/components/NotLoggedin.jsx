const NotLoggedIn = (props) => {
  console.log(props);
  let {
    userObj: {
      details: { username, age },
    },
  } = props;
  console.log(username);
  console.log(props.userObj.username);
  return (
    <div>
      {username}
      <h1>{props?.userObj?.details?.username}</h1>
      <h1>{props.userObj.username}</h1>
    </div>
  );
};

export default NotLoggedIn;
