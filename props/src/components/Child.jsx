function Child(props) {
  console.log(props);
  return (
    <div>
      <h1>I am Child Component</h1>
      {/* <h4>My Name is {props.name}</h4> */}
      <h4>My name is {props.data1}</h4>
      <h4>My name is {props.data2}</h4>
    </div>
  );
}
export default Child;
