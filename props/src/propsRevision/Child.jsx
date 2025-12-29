const Child = (data) => {
  console.log(data);
  return (
    <div>
      <h1>I am from Child Component</h1>
      {/* <h1>{data.data} from child component</h1> */}
      <h1>{data.cars} cars from Child Component</h1>
    </div>
  );
};
export default Child;
