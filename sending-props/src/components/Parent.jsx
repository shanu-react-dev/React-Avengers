import Child from "./Child";

const Parent = () => {
  let myName = "Tony Stark";
  return (
    <div>
      <h1>Hello from Parent Component</h1>
      <Child data={myName} />
      <h1>My name is {myName} from Parent component</h1>
    </div>
  );
};
export default Parent;
