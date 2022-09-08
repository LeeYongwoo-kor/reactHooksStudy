import React, { useState } from "react";
import { Link } from "react-router-dom";
import Effect from "./page/effect";

const Home = () => {
  const [showTimer, setShowTimer] = useState(false);
  return (
    <div className="block">
      <Link to="/useState">useState</Link>
      <Link to="/useRef">useRef</Link>
      {showTimer && <Effect />}
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "useEffect OFF" : "useEffect ON"}
      </button>
    </div>
  );
};

export default Home;
