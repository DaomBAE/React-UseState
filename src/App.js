import { useState } from "react";
const App = () => {
  const [count, setCount] = useState(0);

  const onClickAdd = () => {
    setCount(count + 1);
  };
  const onClickSubtract = () => {
    setCount(count - 1);
  };
  // setCount((prev) => {
  //  return prev -1;
  // }); 
  // setCount(count - 1); 을 화살표 함수 처럼 바꿔 쓸 수 도 있다.

  return (
    <div className="bg-purple-200 min-h-screen flex flex-col justify-center items-center py-2">
      <div>{count}</div>
      <button className="bg-pink-400 w-12 h-12 rounded-full" 
              onClick={onClickAdd}
      >
        +
      </button>
      <button className="bg-orange-400 w-12 h-12 rounded-full" 
              onClick={onClickSubtract}
      >
        -
      </button>
    </div>
  );
  };  

export default App;
