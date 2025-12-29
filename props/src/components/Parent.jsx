import Child from "./Child";
function Parent() {
  let myName = "Virat Kohli";
  let myTeacher = "Mahendra Singh Dhoni";
  let myAge = 34;
  return (
    <div>
      <h1>I am Parent Component</h1>
      {/* <Child name="Amarjeet Kumar" age={20} /> */}
      <Child data1={{myName, }}/>
      {/* <Child data2={myTeacher} /> */}
    </div>
  );
}
export default Parent;
