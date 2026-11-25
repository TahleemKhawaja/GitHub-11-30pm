import { useState } from 'react';
import Profile from './components/Profile';
// import { Evens } from './components/Evens';
import ToggleBtn from './components/ToggleBtn';
import Fruits from './components/Fruits';
const App = () => {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount((prev) => prev + 1);
  }
  return (
    <div>
      <Fruits />
      <ToggleBtn />
      {/* <Evens /> */}
      <Profile />
      <h1>Count</h1>
      <p>{count}</p>
      <button onClick={handleCount}>Increment</button>
    </div>
  );
};

export default App;
