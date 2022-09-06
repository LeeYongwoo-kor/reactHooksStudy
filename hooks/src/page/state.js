import { useState } from "react";

const callBaseballPlayer = () => {
  return ["이대호", "이승엽", "김광현"];
};

const State = () => {
  const [names, setNames] = useState(() => callBaseballPlayer);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleUplaod = () => {
    setNames((prevState) => [inputText, ...prevState]);
  };

  return (
    <div>
      <input text="" value={inputText} onChange={handleInputChange} />
      <button onClick={prevState}>Upload</button>
      {names.map((name, idx) => {
        return <li key={idx}>{name}</li>;
      })}

      <ul></ul>
    </div>
  );
};

export default State;
