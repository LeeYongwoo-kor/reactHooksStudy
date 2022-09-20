import { useState } from "react";
import Page from "./components/page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

const Main = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <Page />
    </ThemeContext.Provider>
  );
};

export default Main;
