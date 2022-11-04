import { useEffect, useMemo, useState } from "react";

// 5. Referential equality mistakes
export function Mistakes4() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // const person = { age, name };
  // Warning: The 'person' object makes the dependencies of useEffect Hook (at line 13) change on every render.
  // Move it inside the useEffect callback. Alternatively, wrap the initialization of 'person' in its own useMemo() Hook.

  const person = useMemo(() => {
    return { age, name };
  }, [age, name]);

  useEffect(() => {
    console.log(person);
  }, [person]);

  return (
    <div style={{ background: darkMode ? "#333" : "#FFF" }}>
      Age:{" "}
      <input
        value={age}
        type="number"
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      Name: <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      Dark Mode:{" "}
      <input
        type="checkbox"
        value={darkMode}
        onChange={(e) => setDarkMode(e.target.checked)}
      />
    </div>
  );
}
