// import React, { useRef } from "react";
// import { useState } from "react";

// const RevisionUseref = () => {
//   let countRef = useRef(0);
//   let [state, setState] = useState(0);
//   console.log(countRef);
//   function incre() {
//     countRef.current = countRef.current + 1;
//     console.log(countRef.current);
//     setState(state + 1);
//     // console.log(state);
//   }
//   return (
//     <div>
//       <h1>{countRef.current}</h1>
//       <button onClick={incre}>Increment</button>
//     </div>
//   );
// };

// export default RevisionUseref;

// import { useRef } from "react";

// function RevisionUseref() {
//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//     console.log("Hello");
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// }

// export default RevisionUseref;

import React, { useRef } from "react";

const RevisionUseref = () => {
  let userNameRef = useRef(null);
  let passwordRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    let email = userNameRef.current.value;
    let password = passwordRef.current.value;
    console.log(email, password);
  }
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
        <label htmlFor="username">Enter Your email or username</label>
        <input
          type="text"
          placeholder="username / email"
          id="username"
          ref={userNameRef}
        />
        <label htmlFor="password">Enter Your password</label>
        <input
          type="password"
          placeholder="username / email"
          id="password"
          ref={passwordRef}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RevisionUseref;
