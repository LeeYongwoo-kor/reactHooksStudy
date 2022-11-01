import { useEffect, useState } from "react";

// 2. Not using the function version of useState
// 3. State does not update immediately!
export function Mistakes2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count]);

  function adjustCount(amount) {
    setCount((currentCount) => {
      return currentCount + amount;
    });
    setCount((currentCount) => {
      return currentCount + amount;
    });
    // setCount(count + amount);
    // setCount(count + amount); bad Idea!!
  }

  return (
    <>
      <button onClick={() => adjustCount(-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => adjustCount(1)}>+</button>
    </>
  );
}
