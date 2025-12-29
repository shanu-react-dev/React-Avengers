import Child from "./Child";
const Parent = () => {
  let firstNum = 7;
  let secondNum = 20;
  let bugattiCars = undefined;
  return (
    <div>
      <h1>I am from Parent Component</h1>
      <h1>{firstNum}</h1>
      <h1>{secondNum}</h1>
      <Child data={firstNum} cars={bugattiCars} />
    </div>
  );
};
export default Parent;
