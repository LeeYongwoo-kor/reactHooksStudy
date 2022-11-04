import { useEffect, useState } from "react";

// 4. Unnecessary useEffects
export function Mistakes3() {
  const API_TODOS = "https://jsonplaceholder.typicode.com/todos/1";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [fullName, setFullName] = useState("");

  const fullName = `${firstName} ${lastName}`;

  const [data, setData] = useState("");

  // useEffect(() => {
  //   setFullName(`${firstName} ${lastName}`);
  // }, [firstName, lastName]);

  useEffect(() => {
    fetch(API_TODOS).then((d) => {
      setData(d);
      // Add instead of useEffect at the bottom
      console.log(d);
    });
  }, []);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      {fullName}
      {data ? "Not data" : data}
    </>
  );
}
