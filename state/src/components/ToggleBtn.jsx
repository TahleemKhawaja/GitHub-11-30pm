import { useState } from 'react';
import './ToggleBtn.css';

const ToggleBtn = () => {
  const [btn, setBtn] = useState(true);
  return (
    <div>
      <button onClick={() => setBtn((prev) => !prev)}>
        {btn ? 'ON' : 'OFF'}
      </button>
      <div
        style={{ height: '100px', width: '100px' }}
        className={btn === true ? 'On' : 'Off'}
      ></div>
    </div>
  );
};

export default ToggleBtn;
