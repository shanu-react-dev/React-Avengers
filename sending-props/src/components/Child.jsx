const Child = (myData) => {
  console.log(myData);
  return (
    <div>
      <h1>Hello from Child Component 😉</h1>
      <h1>{myData.data}</h1>
    </div>
  );
};
export default Child;
