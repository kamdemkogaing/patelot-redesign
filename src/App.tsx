import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto flex flex-col justify-center items-center mt-3">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button
        className="my-8 p-4 bg-[olive] rounded-2xl"
        onClick={() => setCount((count) => count + 1)}
      >
        count is <span className="font-bold">{count}</span>
      </button>
    </div>
  );
}

export default App;
