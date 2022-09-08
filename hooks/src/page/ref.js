import { useEffect, useRef, useState } from "react";

const Ref = (props) => {
  const [count, setCount] = useState(1);
  const [renderCountUseState, setRenderCountUseState] = useState(1);
  const renderCountUseRef = useRef(0);
  const inputRef = useRef();

  // 렌더링 될때마다
  useEffect(() => {
    console.log("Rendering...");
    renderCountUseRef.current = renderCountUseRef.current + 1;
    // setRenderCountUseState(renderCountUseState + 1); -> Infinite loop💀!!
  });

  // 처음 한번만
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const toLogin = () => {
    alert(`Welcome!!🎉 ${inputRef.current.value}`);
    inputRef.current.focus();
  };

  return (
    <div>
      <div>StateCount: {count}</div>
      <div>RenderingCount: {renderCountUseRef.current}</div>
      <button onClick={() => setCount(count + 1)}>UP</button>
      <div>
        <input ref={inputRef} type="text" placeholder="username" />
        <button onClick={toLogin}>Login</button>
      </div>
    </div>
  );
};

export default Ref;
