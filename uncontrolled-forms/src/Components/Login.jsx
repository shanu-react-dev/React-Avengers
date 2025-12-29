import { useRef } from "react";
function Login() {
  let emailRef = useRef(null);
  let passwordRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    console.log({ email, password });
  }
  return (
    <div>
      <form action="">
        <h1>Login Form</h1>
        <label htmlFor="email">Enter your email:</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          name="email"
          id="email"
          ref={emailRef}
        />
        <label htmlFor="password">Enter Password:</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          ref={passwordRef}
        />
        <button onClick={onSubmit}>Login</button>
      </form>
    </div>
  );
}
export default Login;
