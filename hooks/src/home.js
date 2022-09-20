import React, { useState } from "react";
import { Link } from "react-router-dom";
import Effect from "./page/effect";

const Home = () => {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div className="block">
      <Link to="/useState">useState</Link>
      <Link to="/useRef">useRef</Link>
      <Link to="/useMemo">useMemo</Link>
      <Link to="/useCallback">useCallback</Link>
      <Link to="/reactMemo">reactMemo</Link>
      <Link to="/useContext">useContext</Link>
      <Link to="/useReducer">useReducer</Link>
      {showTimer && <Effect />}
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "useEffect OFF" : "useEffect ON"}
      </button>
    </div>
  );
};

export default Home;
