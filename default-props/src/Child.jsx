import React from "react";

// const Child = ({
//   name = "Shanu",
//   age = 21,
//   isStudent = "yes",
//   isMarried = "Yes",
//   wifeName = "Demo",
// }) => {
//   return (
//     <div>
//       <h1>Name :{name}</h1>
//       <h2>Age: {age}</h2>
//       <h2>is a Student: {isStudent ? "yes" : "No"}</h2>
//       <h2>is Married: {isMarried ? "yes" : "Not Married"}</h2>
//       <h2>Wife Name: {wifeName}</h2>
//     </div>
//   );
// };

// export default Child;

// function Child(props) {
//   return (
//     <div>
//       <h1>Name: {props.name}</h1>
//     </div>
//   );
// }

// Child.defaultProps = {
//   name: "Shibam",
// };

// export default Child;

// import React from "react";

const Child = ({ data = {} }) => {
  // Destructure with defaults
  const {
    name = "Unknown",
    age = 0,
    isStudent = false,
    isMarried = false,
    wifeName = "N/A",
  } = data;

  return (
    <div>
      <h2>Child Component</h2>
      <p>
        <b>Name:</b> {name}
      </p>
      <p>
        <b>Age:</b> {age}
      </p>
      <p>
        <b>Student:</b> {isStudent ? "Yes" : "No"}
      </p>
      <p>
        <b>Married:</b> {isMarried ? "Yes" : "No"}
      </p>
      <p>
        <b>Wife Name:</b> {wifeName}
      </p>
    </div>
  );
};

export default Child;
