import { useCallback, useState } from "react";
import Box from "./box";

const Callback = () => {
  const [size, setSizes] = useState(100);
  const [isDark, setIsDark] = useState(false);

  /*
  const createBoxStyle = () => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  };
  // isDark의 State가 변경되어도, Box의 useEffect가 불러진다!
  */
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);
  // size가 변경되었을때만, 불러오게 한다!

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
      }}
    >
      <input
        type="number"
        value={size}
        onchange={(e) => setSizes(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
};

export default Callback;
