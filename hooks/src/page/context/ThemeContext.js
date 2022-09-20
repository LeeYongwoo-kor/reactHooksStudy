import { createContext } from "react";

export const ThemeContext = createContext(null);
// parameter는 <ThemeContext value>를 설정안한 경우 useContext의 value로서 들어간다!
