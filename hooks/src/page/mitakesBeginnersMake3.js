import { useEffect, useState } from "react";

// 4. Unnecessary useEffects
export function Mistakes3() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [fullName, setFullName] = useState("");

  const fullName = `${firstName} ${lastName}`;

  // useEffect(() => {
  //   setFullName(`${firstName} ${lastName}`);
  // }, [firstName, lastName]);

  useEffect(() => {
    fetch("#").then((d) => {
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
    </>
  );
}
