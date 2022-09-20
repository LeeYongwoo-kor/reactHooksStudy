import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Callback from "./page/callback";
import Main from "./page/main";
import Memo from "./page/memo";
import ReactMemo from "./page/react-memo";
import Ref from "./page/ref";
import State from "./page/state";
import Reducer from "./page/reducer";

//https://ko.reactjs.org/docs/hooks-overview.html 참조

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useState" element={<State />} />
        <Route path="/useRef" element={<Ref />} />
        <Route path="/useMemo" element={<Memo />} />
        <Route path="/useCallback" element={<Callback />} />
        <Route path="/useContext" element={<Main />} />
        <Route path="/useReducer" element={<Reducer />} />
        <Route path="/reactMemo" element={<ReactMemo />} />
      </Routes>
    </BrowserRouter>
  );
};

// 1. useState
// 초기에 state를 InitialState를 세팅할 수 있는 옵션을 제공해준다!
// 컴포넌트가 다시 렌더링되어도 그대로 유지됨
// 주의!: 최상위(Top Level)에서만 Hook을 호출해야 한다. for(loop) / if(condition) / Nested Function에서는 사용하지 말 것!
/*
function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );
}
*/

// 2. useInput
// 기본적으로 input을 업데이트한다.
/*
const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Lee", maxLen);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
*/

// 3. useTabs
// 버튼을 클릭했을 때 해당 버튼의 내용을 다르게 보여주는 것!
/*
const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};
*/

// 4. useEffect
// ★Very Important!!
// componentWillUnmount, componentDidMount, componentWillUpdate
// 모두 동일한 역할을 한다.
// paramter -> (function으로서의 effect) / Dependency
// useEffect()가 deps리스트에 있는 값이 변할때만 실행하게 함
/*
const App = () => {
  const sayHello = () => console.log("hello");
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);
  useEffect(sayHello, [number]);
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
};
*/

// 5. useTitle
// 타이틀의 내용을 변경하는 것! react-helmet과 기능이 유사
/*
const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]); // mount가 되면 title을 바꾼다
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 3000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};
*/

// 6. useClick
// 클릭시 이벤트를 변경하는것!
/*
const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    } // -> compoentDidMount, componentDidUpdate
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    }; // -> componentWillUnMount
  }, []);
  return element;
};

const App = () => {
  const title = useClick();
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};
*/

// 7. useConfirm
// 함수가 confirm되어있을 때, 이벤트를 발생시키는 것! validate체크 등에 쓰인다
/*
const useConfirm = (message = "", onConfirm, onCancel) => {
  if (!onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log("Deleting the world");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are you sure?", deleteWorld, abort);
  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};
*/

// 8. usePreventLeave
// 기본적으로 Tab을 닫을 때 실행되는 function
/*
const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.addEventListener("beforeunload", listener);
  return { enablePrevent, disablePrevent };
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

// 9. useBeforeLeave
// useBeforeLeave -> 페이지를 떠날 때 실행되는 function

//https://ko.reactjs.org/docs/hooks-overview.html 참조

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = () => {
    console.log("leaving");
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

// 이 외
// useFadeIn -> 자동으로 서서히 나타나게 하는 function! CSS로도 가능하지만, animation을 Hook에 포함시킬 수 있음
// useNetwork -> navigator가 online 또는 offline이 되는 걸 막아줌. 네트워크가 바뀔 때마다 발생하는 이벤트
// useScroll -> 유저가 스크롤해서 무언가 지나갔을 때 발생하는 액션!!
// useFullScreen -> 풀스크린인지 아닌지 체크. 풀스크린일 때 function이 발생함
// useNotification -> 알람이 실행되는 function! MDN에서 API를 참고할 것
// useAxios -> Axios는 HTTP Request를 만드는 것! Default URL을 설정하거나 자동적으로 Header등을 설정할 때 사용
*/

// ***) reactHooks를 사용하지 않은 경우
// class AppUgly extends React.Component {
//   state = {
//     item: 1,
//   };
//   render() {
//     const { item } = this.state;
//     return (
//       <div className="App">
//         <h1>Hello {item}</h1>
//         <h2>Start editing to see some magic happen!</h2>
//         <button onClick={this.incrementItem}>Increment</button>
//         <button onClick={this.decrementItem}>decrement</button>
//       </div>
//     );
//   }
//   incrementItem = () => {
//     this.setState((state) => {
//       return {
//         item: this.state.item + 1,
//       };
//     });
//   };
//   decrementItem = () => {
//     this.setState((state) => {
//       return {
//         item: state.item + 1,
//       };
//     });
//   };
// }

export default App;
