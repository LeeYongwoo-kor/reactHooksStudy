import { useCallback, useMemo, useState } from "react";
import Child from "./child";

const ReactMemo = () => {
  const [parentAge, setParentAge] = useState(0);
  const [childrenAge, setChildrenAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  const incrementChildrenAge = () => {
    setChildrenAge(childrenAge + 1);
  };

  console.log("Parent Component has been rendered");

  /*
  const user = {
    name: "Johnny Depp",
    country: "USA",
    occupation: "Movie Actor",
  };
  // 전달해주는 것이 Object인 경우 Child의 React.memo에서 Props의 변경이 되었는지 알 수 없다!
  */
  const user = useMemo(() => {
    return {
      name: "Johnny Depp",
      country: "USA",
      occupation: "Movie Actor",
    };
  }, []);

  /*
  const tellMe = () => {
    console.log("Yeah, I'm here");
  };
  // 함수는 객체의 한 종류이다! useCallback을 "함수"를 메모이징하기 위한 Hook이다.
  */
  const tellMe = useCallback(() => {
    console.log("Yeah, I'm here");
  }, []);

  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>Parent</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>Parent +1 year order</button>
      <button onClick={incrementChildrenAge}>Children +1 year order</button>
      <Child user={user} age={childrenAge} tellMe={tellMe} />
    </div>
  );
};

export default ReactMemo;
