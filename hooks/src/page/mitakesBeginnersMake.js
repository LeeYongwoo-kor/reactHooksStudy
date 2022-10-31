import { useRef, useState } from "react";

// 1. Using state when you don't need it
export default function Mistakes() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  function onSubmit(e) {
    e.preventDefault();
    // console.log({ email, password });
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      {/* 
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
        />
      */}
      <input ref={emailRef} type="email" id="email" />
      <label htmlFor="password">Password</label>
      {/* <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        id="password"
      /> */}
      <input ref={passwordRef} type="password" id="password" />
      <button type="submit">Submit</button>
    </form>
  );
}
