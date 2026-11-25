import { useState } from 'react';

export const Evens = () => {
  const [nums, setNums] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  function handleOdds() {
    setNums((prev) => prev.filter((item) => item % 2 === 0));
  }
  return (
    <div>
      {nums.map((item) => (
        <h3>{item}</h3>
      ))}
      <button onClick={handleOdds}>Remove Odds</button>
    </div>
  );
};
