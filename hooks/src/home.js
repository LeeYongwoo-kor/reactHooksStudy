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
      <hr />
      <div>
        <h3>Top 6 React Hook Mistakes Beginners Make</h3>
        <span>
          <a
            href="https://youtube.com/watch?v=GGo3MVBFr1A&t=896s"
            target="_blank"
          >
            (Source)
          </a>
        </span>
        <div className="block">
          <Link to="/mistakes1">mistakes Chapter 1</Link>
          <Link to="/mistakes2">mistakes Chapter 2</Link>
          <Link to="/mistakes3">mistakes Chapter 3</Link>
        </div>
      </div>
      <Link to="/useReducer">useReducer</Link>
      {showTimer && <Effect />}
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "useEffect OFF" : "useEffect ON"}
      </button>
    </div>
  );
};

export default Home;
