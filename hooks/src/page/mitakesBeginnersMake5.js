import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// 6. Not aborting fetch requests
export function Mistakes5() {
  const location = useLocation();

  const api_todos = `https://jsonplaceholder.typicode.com/todos/${location.state}`;

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    // +
    const controller = new AbortController();

    setLoading(true);
    fetch(api_todos, { signal: controller.signal })
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));

    // +
    return () => {
      controller.abort();
    };
  }, [api_todos]);

  console.log(loading, data, error);

  return <div>Hi, I'm mistakesBegginersMake Chapter 6</div>;
}
