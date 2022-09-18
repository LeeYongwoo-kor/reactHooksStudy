import { useEffect, useState, useMemo } from "react";

const Memo = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  /*
  const $location = {
    country: isKorea ? "Korea" : "USA",
  };
  에러 발생! 객체에서는 매번 다른 주소를 비교하므로 같은 것으로 판단하지 않는다.
  The '$location' object makes the dependencies of useEffect Hook (at line 15) change on every render.
  To fix this, wrap the initialization of '$location' in its own useMemo() Hook
  */
  // Let's Memoize
  const $location = useMemo(() => {
    return {
      country: isKorea ? "Korea" : "USA",
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("Call useEffect");
  }, [$location]);

  // useMemo -> 꼭 필요한 함수일 때만 써라!

  return (
    <div>
      <h2>How many meals do I eat in a day?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>Which country are you in?</h2>
      <p>Country: {$location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>
        Go to {isKorea ? "USA" : "Korea"}
      </button>
    </div>
  );
};

export default Memo;
